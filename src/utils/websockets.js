import { eventChannel, take, call, fork, cancelled } from 'redux-saga/effects';

export function createChannelListener(client, recordName, isList = false) {
  return eventChannel(emitter => {
    const record = client.record[isList ? 'getList' : 'getRecord'](recordName);

    record.subscribe(emitter, true);

    return () => {
      record.unsubscribe(emitter);
    };
  });
}

export default function* subscribe({
  client,
  recordName,
  isList,
  onRecordChange
}) {
  let channel;

  try {
    channel = yield call(createChannelListener, client, recordName, isList);
  } catch (error) {
    throw new Error(
      `Error creating subscription channel for deepstream item ${recordName}`
    );
  }

  while (true) {
    try {
      const item = yield take(channel);

      yield fork(onRecordChange, item);
    } catch (error) {
      if (yield cancelled()) {
        channel.close();

        return;
      }

      throw new Error(
        `Error in saga task for deepstream subscription of ${
          isList ? 'list' : 'record'
        } '${recordName}`
      );
    }
  }
}
