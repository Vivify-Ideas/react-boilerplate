import { DashboardOutlined, SettingsOutlined } from '@material-ui/icons'
import { $t } from './../i18n'

export const HOME_PAGE = '/'
export const LOGIN_PAGE = '/login'
export const SIGNUP_PAGE = '/register'
export const PASSWORD_RECOVERY = '/password-recovery'
export const SETTINGS_PAGE = '/settings'

export const SIDEBAR_ROUTES = [
  { name: $t('common.preview'), href: HOME_PAGE, icon: DashboardOutlined },
  { name: $t('common.settings'), href: SETTINGS_PAGE, icon: SettingsOutlined }
  // To extend sidebar options add new routes here...
]
