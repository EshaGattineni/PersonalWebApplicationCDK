#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PersistenceStack } from '../lib/stacks/persistence-stack';

const app = new cdk.App();

// Beta environment
new PersistenceStack(app, 'Beta-PersistenceStack', {
    env: { account: '933500793398', region: 'us-east-1' },
    stageName: 'beta',
});

// Prod environment
new PersistenceStack(app, 'Prod-PersistenceStack', {
    env: { account: '933500793398', region: 'us-west-2' },
    stageName: 'prod',
});