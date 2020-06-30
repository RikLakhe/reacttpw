import React from 'react';

import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'

import Loader from "../../components/Loading";

export const AsyncAppLayout = loadable(() => pMinDelay(import("../../containers/AppLayout"), 200), {
    fallback: <Loader/>
})

export const AsyncNotFound = loadable(() => pMinDelay(import("../../containers/Exception/NotFoundContainer"), 200), {
    fallback: <Loader/>
})
export const AsyncInternalServer = loadable(() => pMinDelay(import("../../containers/Exception/InternalServerContainer"), 200), {
    fallback: <Loader/>
})
export const AsyncForbidden = loadable(() => pMinDelay(import("../../containers/Exception/ForbiddenContainer"), 200), {
    fallback: <Loader/>
})

export const AsyncDashboard = loadable(() => pMinDelay(import("../../containers/Dashboard/DashboardContainer"), 200), {
    fallback: <Loader/>
})
export const AsyncMember = loadable(() => pMinDelay(import("../../containers/Member"), 200), {fallback: <Loader/>})
export const AsyncPrice = loadable(() => pMinDelay(import("../../containers/Price/PriceContainer"), 200), {
    fallback: <Loader/>
})
export const AsyncSetting = loadable(() => pMinDelay(import("../../containers/Setting/SettingContainer"), 200), {
    fallback: <Loader/>
})