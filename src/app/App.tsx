import { Route, Routes } from 'react-router-dom'
import Profile from '../pages/profile/ui/Profile.tsx'
import NavBar from '../widgets/navBar/ui/NavBar.tsx'
import EditProfile from '../pages/editProfile/ui/EditProfile.tsx'

const App = () => {
	return (
		<div className={'flex'}>
			<NavBar />
			<div className={'ml-[244px] flex grow'}>
				<Routes>
					<Route path={'/'} element={<Profile />}></Route>
					<Route path={'/editProfile'} element={<EditProfile />}></Route>
				</Routes>
			</div>
		</div>
	)
}

export default App
