#!/usr/bin/env bash

if [[ $(yarn run -s exec) != yarn ]]; then
  echo "detecting yarn did not work"
  exit 1
fi

if [[ $(npm run -s exec) != npm ]]; then
  echo "detecting npm did not work"
  exit 1
fi