import Layout from "./layout.jsx"
import { useSelector } from 'react-redux'
import { Footer, Navbar } from "./components";
import { Companies, CompanyProfile, Applications, FindJobs, JobDetail, UploadJob, UserProfile, About, AuthPage, Notfound } from "./pages"
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <main className='bg-[#f7fdfd]'>
      <Navbar />

      <Routes>
        <Route element={<Layout />} >
        <Route path="/" element={<Navigate to='/find-jobs' replace={true} />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path={
          user?.accountType === "seeker"
          ? "/user-profile"
          : "/user-profile/:id"
        } element={<UserProfile />} 
        />
        <Route path={"/company-profile"} element={<CompanyProfile />} />
        <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
        <Route path={"/upload-job"} element={<UploadJob />} />
        <Route path={"/applications"} element={<Applications />} />
        <Route path={"/job-detail/:id"} element={<JobDetail />} />
        </Route>
        <Route path='/about-us' element={<About />} />
        <Route path='/user-auth' element={<AuthPage />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
      {user && <Footer />}
    </main>
  )
}

export default App
