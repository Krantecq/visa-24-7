import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import CustomersWrapper from '../pages/customers/CustomersWrapper'
import MerchantWrapper from '../pages/merchants/MerchantWrapper'
import AddNewMerchant from '../pages/merchants/AddNewMerchant'
import ProcessedWrapper from '../pages/processed/ProcessedWrapper'
import InProcessWrapper from '../pages/In-process/InProcessWrapper'
import ApprovalWrapper from '../pages/waiting-for-approval/ApprovalWrapper'
import RejectedWrapper from '../pages/visa-rejected/RejectedWrapper'
import NewVisaWrapper from '../pages/New-visa/CreateNewVisa'
import ApplyVisaWrapper from '../pages/apply-visa/ApplyVisaWrapper'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/apply-visa' />} />
        {/* Pages */}
        <Route path='apply-visa' element={<ApplyVisaWrapper />} />
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='customers' element={<CustomersWrapper />} />
        <Route path='merchants' element={<MerchantWrapper />} />
        <Route path='add-new-merchant' element={<AddNewMerchant />} />
        <Route path='processed' element={<ProcessedWrapper />} />
        <Route path='in-process' element={<InProcessWrapper />} />
        <Route path='waiting-for-approval' element={< ApprovalWrapper/>} />
        <Route path='rejected' element={<RejectedWrapper/>} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        <Route path='create-new-visa' element={<NewVisaWrapper />} />

        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
