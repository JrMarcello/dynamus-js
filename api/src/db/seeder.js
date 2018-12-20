import * as User from '../modules/user/repository'

export default async () => {
  await _feedUser();
}

const _feedUser = async () => {
  const users = await User.getAll();

  if (users.length === 0) {
    User.create([{
      name: { first: 'Admin' },
      email: 'admin@mail.com',
    }, {
      name: { first: 'Pereira', last: 'Janson' },
      email: 'pereira@mail.com',
      password: '123'
    }])
    .then(user => {
      console.log(`${user.length} users created`);
    })
    .catch((err) => {
      console.log('USER-FEED-ERROR', err);
    });
  }
};
