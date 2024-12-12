#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as kms from 'aws-cdk-lib/aws-kms';

const app = new cdk.App();

const stack_config: cdk.StackProps = {
  env: {
      account: process.env.CDK_DEFAULT_ACCOUNT!, //<-- process.env pulls value from CLI env,
      region: process.env.CDK_DEFAULT_REGION! //<-- ! after var, tells TS it won't be null.
  }
}

const stack = new cdk.Stack(app, "cdk-bug-32368", stack_config);
const kmsKeyAlias: string = "alias/bug/32368"; //in Web Console it'll show as bug/32368

if (kms.Key.isLookupDummy(kms.Key.fromLookup(stack, "pre-existing-kms-key", { aliasName: kmsKeyAlias, returnDummyKeyOnMissing: true }))){
  console.log("detected kms isn't pre-existing, will create it.")
  // eksBlueprint.resourceProvider(blueprints.GlobalResources.KmsKey, new blueprints.CreateKmsKeyProvider(
  // kmsKeyAlias, {description: "Easy EKS generated kms key, used to encrypt etcd and ebs-csi-driver provisioned volumes"}));
}
else { 
  console.log("detected pre-existing kms, will reuse it.")
  // eksBlueprint.resourceProvider(blueprints.GlobalResources.KmsKey, new blueprints.LookupKmsKeyProvider(this.config.kmsKeyAlias)); 
}
