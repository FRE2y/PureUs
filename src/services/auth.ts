export async function loginApi(email: string, password: string) {
  return new Promise<{ token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@test.com' && password === '123456') {
        resolve({ token: 'fake-jwt-token-123' });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
}
