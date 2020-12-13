import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '#/pages/home'
import PageError from '#/pages/error'
import StartedRequirements from '#/pages/started/requirements'
import StartedSetup from '#/pages/started/setup'
import StartedUsage from '#/pages/started/usage'
import UtilsRequest from '#/pages/utils/request'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/started/requirements" component={StartedRequirements} />
    <Route exact path="/started/setup" component={StartedSetup} />
    <Route exact path="/started/usage" component={StartedUsage} />
    <Route exact path="/utils/request" component={UtilsRequest} />
    <Route path="*" component={PageError} />
  </Switch>
)
