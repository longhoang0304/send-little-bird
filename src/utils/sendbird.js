import SendBird from 'sendbird';

const sb = new SendBird({appId: 'F78673F0-E612-4A51-A68A-C79061E26E4A'});

export function sendBirdPromisify(func, ...args) {
  return new Promise((res, rej) => {
    func(...args, (returnValue, error) => {
      if (error) {
        rej(error);
        return;
      }
      res(returnValue);
    });
  })
}

export default sb;
