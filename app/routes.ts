import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [index("routes/home.tsx"),
    route("artists", "routes/artist.tsx"),
    route("events", "routes/events.tsx"),
    route("artist-application", "routes/apply.tsx"),
    route("sponsor-application", "routes/sponsor.tsx"),
] satisfies RouteConfig
