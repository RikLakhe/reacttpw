import React from 'react';

import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'

import Loader from "../../components/Loading";

export const AsyncAppLayout = loadable(() => pMinDelay(import("../../Layout"), 200), {
    fallback: <Loader/>
})
export const AsyncMember = loadable(() => pMinDelay(import("../../pages/member"), 200), {fallback: <Loader/>})
