#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PersonalWebApplicationCdkStack } from '../lib/personal_web_application_cdk-stack';

const app = new cdk.App();
new PersonalWebApplicationCdkStack(app, 'PersonalWebApplicationCdkStack', {});