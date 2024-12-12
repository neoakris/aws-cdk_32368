# aws-cdk_32368
This is intended to be a Short, (relatively) Self Contained, Example  
Code Snippet for repoducing the bug linked below  
https://github.com/aws/aws-cdk/issues/32368

## Reproducibility Notes
```bash
cd ~
git clone https://github.com/neoakris/aws-cdk_32368
cd ~/aws-cdk_32368
npm install
npx cdk bootstrap
# ^-- I noticed this caused log message in if statement to show up twice (just an observation)
npx cdk list
# ^-- I noticed this caused log message in if statement to show up once (just an observation)
npx cdk deploy bug-32368
```

