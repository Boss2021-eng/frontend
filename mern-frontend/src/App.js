import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import Welcome from './features/auth/Welcome';
import NotesList from './features/notes/NotesList';
import UsersLists from './features/users/UsersLists';
import DashLayout from './components/DashLayout';
import EditUser from './features/users/EditUser';
import NewUser from './features/users/NewUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />

          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersLists />} />

            <Route path=":id" element={<EditUser />} />
            <Route path="new" element={<NewUser />} />
          </Route>
        </Route>
      </Route>
      {/* End Dash */}
    </Routes>
  );
}

export default App;
