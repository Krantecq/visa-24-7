/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTIcon } from '../../../../helpers'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'
import { SidebarMenuItem } from './SidebarMenuItem'
import dashboard from '../../../../assets/icons/dashboard.svg'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/superadmin/dashboard'
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="#bde5b9" width="20" height="20" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
              }
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-app-indicator'
      />
      {/* <SidebarMenuItem
        to='/superadmin/customers'
        icon='element-11'
        title={'Customers'}
        fontIcon='bi-app-indicator'
      /> */}
            <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Merchants</span>
        </div>
      </div>
      <SidebarMenuItem
        to='/superadmin/merchants'
        icon={<svg width="20" height="20" fill="#bde5b9" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520.071 520.07" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <circle cx="98.16" cy="60.547" r="57.586"></circle> <path d="M421.917,2.961c31.806,0,57.582,25.783,57.582,57.586s-25.776,57.585-57.582,57.585 c-31.807,0-57.589-25.783-57.589-57.585S390.11,2.961,421.917,2.961z"></path> <path d="M465.129,112.109c-11.337,10.586-26.51,17.117-43.213,17.117c-16.71,0-31.877-6.537-43.214-17.117 c-24.554,6.481-44.083,25.318-51.583,49.414c-21.214-3.91-43.746-6.029-67.082-6.029c-23.338,0-45.867,2.119-67.081,6.029 c-7.498-24.096-27.036-42.933-51.58-49.414c-11.343,10.58-26.51,17.111-43.217,17.111c-16.704,0-31.874-6.531-43.213-17.111 C23.374,120.449,0,149.17,0,183.319v59.77l0.15,0.925l4.123,1.289c12.85,4.013,25.083,7.069,36.78,9.46 c-5.391,11.559-8.334,23.723-8.334,36.289c0,54.272,53.779,101.169,131.199,122.802c-2.858,7.838-4.445,16.278-4.445,25.098v59.77 l0.154,0.934l4.12,1.289c38.792,12.117,72.504,16.166,100.253,16.166c54.189,0,85.594-15.457,87.532-16.438l3.854-1.95h0.408 v-59.77c0-8.382-1.419-16.42-4.008-23.921c79.76-21.072,135.569-68.701,135.569-123.979c0-11.976-2.647-23.578-7.554-34.637 c22.26-4.604,34.803-10.767,36.003-11.378l3.859-1.954l0.408,0.006v-59.77C520.077,149.17,496.705,120.449,465.129,112.109z M471.649,291.052c0,48.965-52.15,91.149-126.62,109.728c-9.806-16.054-25.534-28.117-44.171-33.029 c-11.343,10.58-26.516,17.105-43.217,17.105c-16.698,0-31.874-6.525-43.216-17.105c-18.223,4.812-33.683,16.443-43.524,31.965 C98.65,380.623,48.433,339.101,48.433,291.052c0-11.597,2.976-22.798,8.426-33.407c17.396,2.707,33.337,3.824,47.665,3.824 c54.187,0,85.597-15.451,87.532-16.432l3.854-1.954l0.414,0.006v-59.775c0-2.187-0.104-4.359-0.292-6.496 c20.206-3.644,41.704-5.621,64.007-5.621c22.308,0,43.811,1.977,64.014,5.621c-0.188,2.143-0.295,4.309-0.295,6.502v59.77 l0.153,0.931l4.126,1.289c38.786,12.111,72.501,16.16,100.24,16.16c13.312,0,25.222-0.928,35.684-2.358 C468.936,269.288,471.649,279.986,471.649,291.052z"></path> <circle cx="257.641" cy="316.185" r="57.583"></circle> </g> </g> </g></svg>}
        title={'Retailers'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/issueApi'
        icon={<svg width="20" height="20" viewBox="-2.4 -2.4 28.80 28.80" fill="#bde5b9" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.5 6.5C1.5 3.46243 3.96243 1 7 1C10.0376 1 12.5 3.46243 12.5 6.5C12.5 9.53757 10.0376 12 7 12C3.96243 12 1.5 9.53757 1.5 6.5Z" fill="#bde5b9"></path> <path d="M14.4999 6.5C14.4999 8.00034 14.0593 9.39779 13.3005 10.57C14.2774 11.4585 15.5754 12 16.9999 12C20.0375 12 22.4999 9.53757 22.4999 6.5C22.4999 3.46243 20.0375 1 16.9999 1C15.5754 1 14.2774 1.54153 13.3005 2.42996C14.0593 3.60221 14.4999 4.99966 14.4999 6.5Z" fill="#bde5b9"></path> <path d="M0 18C0 15.7909 1.79086 14 4 14H10C12.2091 14 14 15.7909 14 18V22C14 22.5523 13.5523 23 13 23H1C0.447716 23 0 22.5523 0 22V18Z" fill="#bde5b9"></path> <path d="M16 18V23H23C23.5522 23 24 22.5523 24 22V18C24 15.7909 22.2091 14 20 14H14.4722C15.4222 15.0615 16 16.4633 16 18Z" fill="#bde5b9"></path> </g></svg>}
        title={'Partners'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/testing'
        icon={<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="#bde5b9" viewBox="0 0 24 24" stroke="#bde5b9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g></svg>}
        title={'Testing (Sandbox)'}
        fontIcon='bi-app-indicator'
      />
      {/* <SidebarMenuItem to='/builder' icon='switch' title='Layout Builder' fontIcon='bi-layers' /> */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>VISA</span>
        </div>
      </div>
      {/* <SidebarMenuItem
        to='/apply-visa'
        icon=''
        title={'Create New VISA'}
        fontIcon='bi-app-indicator'
      /> */}
      <SidebarMenuItem
        to='/superadmin/processed'
        icon={<svg fill="#bde5b9" height="20" width="20" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Validation-Filled"> <path d="M20.32,8.56c-0.51-1.22,0.38-3.41-0.54-4.33c-0.92-0.92-3.11-0.03-4.33-0.54C14.27,3.19,13.36,1,12,1S9.73,3.19,8.56,3.68 C7.33,4.19,5.14,3.3,4.22,4.22C3.3,5.14,4.19,7.33,3.68,8.56C3.19,9.73,1,10.64,1,12s2.19,2.27,2.68,3.44 c0.51,1.22-0.38,3.41,0.54,4.33c0.92,0.92,3.11,0.03,4.33,0.54C9.73,20.81,10.64,23,12,23s2.27-2.19,3.44-2.68 c1.22-0.51,3.41,0.38,4.33-0.54c0.92-0.92,0.03-3.11,0.54-4.33C20.81,14.27,23,13.36,23,12S20.81,9.73,20.32,8.56z M11,16.41 l-3.71-3.71l1.41-1.41L11,13.59l5.29-5.29l1.41,1.41L11,16.41z"></path> </g> </g></svg>}
        title={'Processed'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/in-process'
        icon={<svg height="20" width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  fill="" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="loop_x5F_alt3"> <g> <path fill="#bde5b9" d="M28,16v2c0,1.102-0.898,2-2,2H11.996L12,16l-8,6l8,6l-0.004-4H26c3.309,0,6-2.695,6-6v-2H28z"></path> <path fill="#bde5b9" d="M4,14c0-1.105,0.898-2,2-2h14v4l7.992-6L20,4v4H6c-3.309,0-6,2.688-6,6v2h4V14z"></path> </g> </g> </g> </g></svg>}
        title={'In-Process'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/waiting-for-approval'
        icon={<svg fill="#bde5b9" height="20" width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M251.01,277.015h-17.683l-0.002-31.559c0-31.639-17.358-60.726-48.876-81.901c-3.988-2.682-6.466-8.45-6.466-15.055 s2.478-12.373,6.464-15.053c31.52-21.178,48.878-50.264,48.88-81.904V19.985h17.683c5.518,0,9.992-4.475,9.992-9.993 c0-5.518-4.475-9.992-9.992-9.992H45.99c-5.518,0-9.992,4.475-9.992,9.992c0,5.519,4.475,9.993,9.992,9.993h17.683v31.558 c0,31.642,17.357,60.729,48.875,81.903c3.989,2.681,6.467,8.448,6.467,15.054c0,6.605-2.478,12.373-6.466,15.053 c-31.519,21.176-48.876,50.263-48.876,81.903v31.559H45.99c-5.518,0-9.992,4.475-9.992,9.993c0,5.519,4.475,9.992,9.992,9.992 h205.02c5.518,0,9.992-4.474,9.992-9.992C261.002,281.489,256.527,277.015,251.01,277.015z M138.508,110.362 c0-5.518,4.474-9.993,9.992-9.993s9.992,4.475,9.992,9.993v17.664c0,5.519-4.474,9.992-9.992,9.992s-9.992-4.474-9.992-9.992 V110.362z M141.433,173.956c1.858-1.857,4.436-2.927,7.064-2.927c2.628,0,5.206,1.069,7.064,2.927 c1.868,1.859,2.928,4.438,2.928,7.065s-1.06,5.206-2.928,7.064c-1.858,1.858-4.436,2.928-7.064,2.928 c-2.628,0-5.206-1.069-7.064-2.928c-1.859-1.858-2.928-4.437-2.928-7.064S139.573,175.816,141.433,173.956z M86.94,277.112 c8.152-30.906,50.161-64.536,55.405-68.635c3.614-2.826,8.692-2.828,12.309,0c5.244,4.1,47.252,37.729,55.404,68.635H86.94z"></path> </g></svg>}
        title={'Waiting For Approval'}
        fontIcon='bi-app-indicator'
      />{' '}
      <SidebarMenuItem
        to='/superadmin/rejected'
        icon={<svg width="20" height="20" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" className="si-glyph si-glyph-deny" fill="#bde5b9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>799</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M9.016,0.06 C4.616,0.06 1.047,3.629 1.047,8.029 C1.047,12.429 4.615,15.998 9.016,15.998 C13.418,15.998 16.985,12.429 16.985,8.029 C16.985,3.629 13.418,0.06 9.016,0.06 L9.016,0.06 Z M3.049,8.028 C3.049,4.739 5.726,2.062 9.016,2.062 C10.37,2.062 11.616,2.52 12.618,3.283 L4.271,11.631 C3.508,10.629 3.049,9.381 3.049,8.028 L3.049,8.028 Z M9.016,13.994 C7.731,13.994 6.544,13.583 5.569,12.889 L13.878,4.58 C14.571,5.555 14.982,6.743 14.982,8.028 C14.981,11.317 12.306,13.994 9.016,13.994 L9.016,13.994 Z" fill="#bde5b9" className="si-glyph-fill"> </path> </g> </g></svg>}
        title={'Rejected'}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Wallet</span>
        </div>
      </div>
      <SidebarMenuItem
        to='/superadmin/wallet'
        icon={<svg width="20" height="20" viewBox="-1.5 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#bde5b9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>wallet</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set-Filled"  transform="translate(-259.000000, -776.000000)" fill="#bde5b9"> <path d="M283,799 L289,799 L289,797 L283,797 L283,799 Z M287,787 L259,787 L259,807 C259,808.104 259.896,809 261,809 L287,809 C288.104,809 289,808.104 289,807 L289,801 L282,801 C281.448,801 281,800.553 281,800 L281,796 C281,795.448 281.448,795 282,795 L289,795 L289,789 C289,787.896 288.104,787 287,787 L287,787 Z M287,778 C287,777.447 286.764,777.141 286.25,776.938 C285.854,776.781 285.469,776.875 285,777 L259,785 L287,785 L287,778 L287,778 Z" id="wallet" > </path> </g> </g> </g></svg>}
        title={'Wallet'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/revenue'
        icon={<svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#bde5b9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>currency-revenue</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Q3_icons" data-name="Q3 icons"> <path d="M44,7.1V14a2,2,0,0,1-2,2H35a2,2,0,0,1-2-2.3A2.1,2.1,0,0,1,35.1,12h2.3A18,18,0,0,0,6.1,22.2a2,2,0,0,1-2,1.8h0a2,2,0,0,1-2-2.2A22,22,0,0,1,40,8.9V7a2,2,0,0,1,2.3-2A2.1,2.1,0,0,1,44,7.1Z"></path> <path d="M4,40.9V34a2,2,0,0,1,2-2h7a2,2,0,0,1,2,2.3A2.1,2.1,0,0,1,12.9,36H10.6A18,18,0,0,0,41.9,25.8a2,2,0,0,1,2-1.8h0a2,2,0,0,1,2,2.2A22,22,0,0,1,8,39.1V41a2,2,0,0,1-2.3,2A2.1,2.1,0,0,1,4,40.9Z"></path> <path d="M24.7,22c-3.5-.7-3.5-1.3-3.5-1.8s.2-.6.5-.9a3.4,3.4,0,0,1,1.8-.4,6.3,6.3,0,0,1,3.3.9,1.8,1.8,0,0,0,2.7-.5,1.9,1.9,0,0,0-.4-2.8A9.1,9.1,0,0,0,26,15.3V13a2,2,0,0,0-4,0v2.2c-3,.5-5,2.5-5,5.2s3.3,4.9,6.5,5.5,3.3,1.3,3.3,1.8-1.1,1.4-2.5,1.4h0a6.7,6.7,0,0,1-4.1-1.3,2,2,0,0,0-2.8.6,1.8,1.8,0,0,0,.3,2.6A10.9,10.9,0,0,0,22,32.8V35a2,2,0,0,0,4,0V32.8a6.3,6.3,0,0,0,3-1.3,4.9,4.9,0,0,0,2-4h0C31,23.8,27.6,22.6,24.7,22Z"></path> </g> </g> </g></svg>}
        title={'Revenue'}
        fontIcon='bi-app-indicator'
      />
            {/* <SidebarMenuItem
        to='/superadmin/apiPayment'
        icon=''
        title={'Api Payment'}
        fontIcon='bi-app-indicator'
      /> */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Settings</span>
        </div>
      </div>
      <SidebarMenuItem
        to='/superadmin/apisetting'
        icon={<svg  width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" fill="#bde5b9"></path> </g></svg>}
        title={'API Setting'}
        fontIcon='bi-app-indicator'
      />
    </>
  )
}

export { SidebarMenuMain }
