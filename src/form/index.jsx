import React, { forwardRef, useRef } from 'react'

export default forwardRef((props, ref) => {
  const form = useRef(ref)
  const {
    children,
    onSubmit = () => {},
    onSuccess = () => {},
    onError = () => {},
    onComplete = () => {},
    errorSelector = '[data-input-error]',
    errorTimerScroll = 300,
  } = props

  const customAttributes = { ...props }
  delete customAttributes.onSubmit
  delete customAttributes.onSuccess
  delete customAttributes.onComplete

  const getInputs = () => [...form.current.querySelectorAll('input, select, textarea')]

  const scrollSmooth = (to, duration = errorTimerScroll) => {
    clearTimeout(window.scrollSmoothTimerCache)
    if (duration <= 0) {
      return
    }
    const difference = to - window.scrollY - 100
    const perTick = (difference / duration) * 10
    window.scrollSmoothTimerCache = setTimeout(() => {
      if (!Number.isNaN(parseInt(perTick, 10))) {
        window.scrollTo(0, window.scrollY + perTick)
        scrollSmooth(to, duration - 10)
      }
    }, 10)
  }

  const handleErrorDetected = () => {
    const inputList = getInputs()
    const input = form.current.querySelectorAll(errorSelector)
    const { scrollY, scrollTo } = window
    inputList.forEach(input => {
      input.focus()
      input.blur()
    })
    scrollTo(0, scrollY)
    const inputHas = Boolean(input.length)
    if (inputHas) {
      const { top } = input[0].getBoundingClientRect()
      scrollSmooth(top + scrollY)
    }
    return Promise.resolve(!inputHas)
  }

  const handleTypeValue = ({ value = '', type }) => {
    const formatBoolean = () => value === 'true'
    const formatString = () => value.toString()
    const formatNumber = () => Number(value)
    const formatJSON = () => JSON.parse(value)
    if (!type) {
      if (value === 'true' || value === 'false') {
        return formatBoolean()
      } else {
        const valueToNumber = Number(value)
        return window.Number.isNaN(valueToNumber) ? formatString() : formatNumber()
      }
    }
    const valueType = {
      string: formatString(),
      boolean: formatBoolean(),
      number: formatNumber(),
      json: formatJSON(),
    }
    const formatNull = () => {
      if (valueType[type] === null) {
        return null
      }
      return valueType[type] || valueType.string
    }
    return type === 'boolean' ? valueType[type] : formatNull()
  }

  const handleSerializePath = ({ key, value, type, ObjectSend, input }) => {
    const isArray = /\w+\[/.exec(key) || { index: -1 }
    const isObject = /\w+\./.exec(key) || { index: -1 }
    const { type: inputType, checked } = input

    if ((inputType === 'checkbox' || inputType === 'radio') && !checked) {
      return false
    }

    if (isArray.index === -1 && isObject.index === -1) {
      const valueFormat = handleTypeValue({ value, type })
      if (inputType === 'checkbox') {
        if (!ObjectSend[key]) {
          ObjectSend[key] = []
        }
        return ObjectSend[key].push(valueFormat)
      }
      return (ObjectSend[key] = valueFormat)
    }
    const isObjectBuild = isObject.index > isArray.index || isObject.index !== -1
    const isArrayBuild = isArray.index > isObject.index || isArray.index !== -1

    if (isObjectBuild) {
      const [keyObject] = isObject
      const keyCurrent = keyObject.replace('.', '')
      const keyNext = isObject.input.replace(keyObject, '')
      const objectKeyCurrent = ObjectSend[keyCurrent]
      const typeValue = objectKeyCurrent && objectKeyCurrent.constructor.name

      if (!ObjectSend[keyCurrent] || typeValue === 'Array' || typeValue === 'String') {
        ObjectSend[keyCurrent] = {}
      }
      handleSerializePath({ key: keyNext, value, type, ObjectSend: ObjectSend[keyCurrent], input })
    }
    if (isArrayBuild) {
      const [keyObject] = isArray
      const keyCurrent = keyObject.replace('[', '')
      const keyNext = isArray.input.replace(keyObject, '').replace(']', '')
      const objectKeyCurrent = ObjectSend[keyCurrent]
      const typeValue = objectKeyCurrent && objectKeyCurrent.constructor.name

      if (!ObjectSend[keyCurrent] || typeValue === 'Object' || typeValue === 'String') {
        ObjectSend[keyCurrent] = []
      }

      if (!keyNext) {
        const valueFormat = handleTypeValue({ value, type })
        ObjectSend[keyCurrent].push(valueFormat)
      } else {
        handleSerializePath({ key: keyNext, value, type, ObjectSend: ObjectSend[keyCurrent], input })
      }
    }
  }

  const serializeForm = ObjectSend => {
    const inputList = getInputs()
    inputList.forEach(input => {
      const { name: inputKey, value: inputValue } = input
      const { key: dataKey, value: dataValue, type } = input.dataset
      const key = dataKey || inputKey
      const value = dataValue || inputValue
      handleSerializePath({ key, value, type, ObjectSend, input })
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    e.persist()
    handleErrorDetected().then(success => {
      if (success) {
        const submit = onSubmit(e)
        if (submit !== false) {
          const ObjectSend = {}
          serializeForm(ObjectSend)
          const { method = 'POST', action = '/' } = customAttributes
          const response = {
            success: false,
            status: 0,
            data: '',
            target: form.current,
          }
          window
            .fetch(action, {
              method,
            })
            .then(async e => {
              const { status, ok: requestSuccess } = e
              const data = await e.json()
              return {
                data,
                status,
                success: requestSuccess,
              }
            })
            .then(({ data, status, success: requestSuccess }) => {
              response.data = data
              response.status = status
              response.success = requestSuccess
              if (success) {
                onSuccess(response)
              } else {
                onError(response)
              }
            })
            .catch(e => {
              response.data = e.stack
              response.status = 0
              response.success = false
              onError(response)
            })
            .finally(() => {
              onComplete(response)
            })
        }
      } else {
        onError(e)
      }
    })
  }

  return (
    <form {...customAttributes} ref={form} onSubmit={e => handleSubmit(e)}>
      {children}
    </form>
  )
})
