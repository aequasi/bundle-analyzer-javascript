import * as appveyor from './appveyor'
import * as azurePipelines from './azurePipelines'
import * as buildkite from './buildkite'
import * as circle from './circle'
import * as cirrus from './cirrus'
import * as codeship from './codeship'
import * as drone from './drone'
import * as gitlab from './gitlab'
import * as heroku from './heroku'
import * as jenkins from './jenkins'
import * as semaphore from './semaphore'
import * as shippable from './shippable'
import * as snap from './snap'
import * as teamcity from './teamcity'
import * as travis from './travis'
import * as wercker from './wercker'

export default [
  appveyor,
  azurePipelines,
  buildkite,
  circle,
  cirrus,
  codeship,
  drone,
  gitlab,
  heroku,
  jenkins,
  semaphore,
  shippable,
  snap,
  teamcity,
  travis,
  wercker,
]
