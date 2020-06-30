import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
const Browse = () => {
    return (<div className="mt-8 font-bold text-xl px-10">
        <h2 className="text-5xl">Browse</h2>
        <nav className="flex items-center justify-center flex-wrap w-full p-0 m-0 space-x-3 space-y-2 md:space-x-4 text-center">
            <NavLink to="/browse/genre-and-bood" activeClassName="border-green-700 border-b-2 text-gray-100" className="uppercase tracking-wide text-xs font-medium text-gray-500 hover:text-gray-200">Genre & Mood</NavLink>
            <NavLink to="/browse/podcasts" activeClassName="border-green-700 border-b-2 text-gray-100" className="uppercase tracking-wide text-xs font-medium text-gray-500 hover:text-gray-200">Podcasts</NavLink>
            <NavLink to="/browse/charts" activeClassName="border-green-700 border-b-2 text-gray-100" className="uppercase text-xs font-medium tracking-wide text-gray-500 hover:text-gray-200">Charts</NavLink>
            <NavLink to="/browse/new-releases" activeClassName="border-green-700 border-b-2 text-gray-100" className="uppercase text-xs font-medium tracking-wide text-gray-500 hover:text-gray-200">New Releses</NavLink>
            <NavLink to="/browse/discover" activeClassName="border-green-700 border-b-2 text-gray-100" className="uppercase text-xs font-medium tracking-wide text-gray-500 hover:text-gray-200">Discover</NavLink>
            <NavLink to="/browse/concerts" activeClassName="border-green-700 border-b-2 text-gray-100" className="uppercase text-xs font-medium tracking-wide text-gray-500 hover:text-gray-200">Concerts</NavLink>
        </nav>

        <Switch>
            <Route exact path="/browse/genre-and-bood"><GenreAndMood /></Route>
            <Route exact path="/browse/podcasts"><GenreAndMood /></Route>
            <Route exact path="/browse/charts"><GenreAndMood /></Route>
            <Route exact path="/browse/new-releases"><GenreAndMood /></Route>
            <Route exact path="/browse/discover"><GenreAndMood /></Route>
            <Route exact path="/browse/concerts"><GenreAndMood /></Route>
        </Switch>
    </div>
    )
}

const GenreAndMood = () => {
    return <div>asdf</div>
}

export default Browse
