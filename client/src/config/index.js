import dev from "./environments/env.dev";

const config = {
  appName: "Rotten Potatoes",
  env: dev.BASE_URL,

  api: {
    domains: {
      user: "/user",
      group: "/group",
      event: "/group/event",
      notification: "/notification",
      planner: "/open-calendar/planner",
      reservation: "/open-calendar/reservation",
    },
  },
};

const BASE_URL = { COMMON: `${config.env}` };

export default BASE_URL;
