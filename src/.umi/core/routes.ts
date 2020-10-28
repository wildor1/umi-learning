// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/shishiping/WebstormProjects/antdcourse/node_modules/_@umijs_runtime@3.2.24@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/tree",
    "component": require('/Users/shishiping/WebstormProjects/antdcourse/src/pages/tree/Index').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('/Users/shishiping/WebstormProjects/antdcourse/src/layout').default,
    "routes": [
      {
        "path": "/hello",
        "component": require('/Users/shishiping/WebstormProjects/antdcourse/src/pages/Hello').default,
        "exact": true
      },
      {
        "path": "/layout",
        "component": require('/Users/shishiping/WebstormProjects/antdcourse/src/pages/layout').default,
        "exact": true
      },
      {
        "path": "/dashboard",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "component": require('/Users/shishiping/WebstormProjects/antdcourse/src/pages/Dashboard/Analysis').default,
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "component": require('/Users/shishiping/WebstormProjects/antdcourse/src/pages/Dashboard/Monitor').default,
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "component": require('/Users/shishiping/WebstormProjects/antdcourse/src/pages/Dashboard/Workplace').default,
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
