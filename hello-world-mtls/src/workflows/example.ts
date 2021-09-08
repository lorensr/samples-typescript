import { Context } from '@temporalio/workflow';
import { Example } from '../interfaces/workflows';
import * as activities from '../activities/greet';

const { greet } = Context.configureActivities<typeof activities>({
  type: 'remote',
  startToCloseTimeout: '30 minutes',
});

// A workflow that simply calls an activity
async function main(name: string): Promise<string> {
  return greet(name);
}

export const workflow = { main };