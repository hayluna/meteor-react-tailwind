import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard } from 'imports/ui/Dashboard'
import { List } from 'imports/ui/List'

const Title = () => (
  <div className="container flex flex-col justify-center space-y-2 space-x-2 mb-5">
    <p className="text-3xl text-center m-5">Meteor tailwindcss Example</p>
    <img src="/logo.svg" className="h-7 sm:h-8" />
  </div>
)

function App() {
  return (
    <div className="divide-y divide-gray-100">
      <Title />
      <Switch>
        <Route path="/list" component={List} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  )
}

export default App
