let role;
// role = 'guest';
role = 'admin';

switch (role) {
    case 'guest':
        console.log('guest user');
        break;
    case 'admin':
        console.log('admin user');
        break;
    default:
        console.log('unknown user');
        break;
}