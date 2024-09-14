import AdminSidebar from '../components/AdminSidebar'

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className='dashboard'>

    <div className="bar">
      <input type="Search for data, user, docs ..." />
    </div>

      </main>
    </div>
  )
}
export default Dashboard
