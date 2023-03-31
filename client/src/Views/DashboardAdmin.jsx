import React from 'react'
import DashboardP from "../components/DashboardP"
import DashboardAppsAndPro from "../components/DashboardAppsAndPro"
import DashboardV from "../components/DashboardV"
import DashboardPPC from "../components/DashboardPPC"
import DashboardVPc from '../components/DashboardVPc'
import DashboardPro from '../components/DashboardPro'


const DashboardAdmin = () => {
  return (
    <>
    <DashboardP/><br /><br />
    <DashboardPPC/><br /><br />
    <DashboardV/><br /><br />
    <DashboardVPc/><br /><br />
    <DashboardAppsAndPro/><br /><br />
    <DashboardPro/>
    </>
  )
}

export default DashboardAdmin