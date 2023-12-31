/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/superadmin/dashboard'
        icon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill=''
            width='20'
            height='20'
            viewBox='0 0 24 24'
          >
            <path d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z' />
          </svg>
        }
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      {/* <SidebarMenuItem
        to='/superadmin/customers'
        icon='element-11'
        title={'Customers'}
        fontIcon='bi-app-indicator'
      /> */}
      <div className='menu-item border-4'>
        <div className='menu-content  pt-8 pb-2'>
          ────
          <span style={{fontWeight: '600'}} className='menu-section text-uppercase fs-7 ls-1'>
            {' '}
            Merchants{' '}
          </span>
          ────
        </div>
      </div>
      <SidebarMenuItem
        to='/superadmin/merchants'
        icon={
          <svg
            width='20'
            height='20'
            viewBox='-2.4 -2.4 28.80 28.80'
            fill=''
            xmlns='http://www.w3.org/2000/svg'
            stroke=''
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <path
                d='M1.5 6.5C1.5 3.46243 3.96243 1 7 1C10.0376 1 12.5 3.46243 12.5 6.5C12.5 9.53757 10.0376 12 7 12C3.96243 12 1.5 9.53757 1.5 6.5Z'
                fill=''
              ></path>{' '}
              <path
                d='M14.4999 6.5C14.4999 8.00034 14.0593 9.39779 13.3005 10.57C14.2774 11.4585 15.5754 12 16.9999 12C20.0375 12 22.4999 9.53757 22.4999 6.5C22.4999 3.46243 20.0375 1 16.9999 1C15.5754 1 14.2774 1.54153 13.3005 2.42996C14.0593 3.60221 14.4999 4.99966 14.4999 6.5Z'
                fill=''
              ></path>{' '}
              <path
                d='M0 18C0 15.7909 1.79086 14 4 14H10C12.2091 14 14 15.7909 14 18V22C14 22.5523 13.5523 23 13 23H1C0.447716 23 0 22.5523 0 22V18Z'
                fill=''
              ></path>{' '}
              <path
                d='M16 18V23H23C23.5522 23 24 22.5523 24 22V18C24 15.7909 22.2091 14 20 14H14.4722C15.4222 15.0615 16 16.4633 16 18Z'
                fill=''
              ></path>{' '}
            </g>
          </svg>
        }
        title={'Retailers'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/issueApi'
        icon={
          <svg
            width='20'
            height='20'
            fill=''
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 520.071 520.07'
            stroke='#fff'
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <circle cx='98.16' cy='60.547' r='57.586'></circle>{' '}
                  <path d='M421.917,2.961c31.806,0,57.582,25.783,57.582,57.586s-25.776,57.585-57.582,57.585 c-31.807,0-57.589-25.783-57.589-57.585S390.11,2.961,421.917,2.961z'></path>{' '}
                  <path d='M465.129,112.109c-11.337,10.586-26.51,17.117-43.213,17.117c-16.71,0-31.877-6.537-43.214-17.117 c-24.554,6.481-44.083,25.318-51.583,49.414c-21.214-3.91-43.746-6.029-67.082-6.029c-23.338,0-45.867,2.119-67.081,6.029 c-7.498-24.096-27.036-42.933-51.58-49.414c-11.343,10.58-26.51,17.111-43.217,17.111c-16.704,0-31.874-6.531-43.213-17.111 C23.374,120.449,0,149.17,0,183.319v59.77l0.15,0.925l4.123,1.289c12.85,4.013,25.083,7.069,36.78,9.46 c-5.391,11.559-8.334,23.723-8.334,36.289c0,54.272,53.779,101.169,131.199,122.802c-2.858,7.838-4.445,16.278-4.445,25.098v59.77 l0.154,0.934l4.12,1.289c38.792,12.117,72.504,16.166,100.253,16.166c54.189,0,85.594-15.457,87.532-16.438l3.854-1.95h0.408 v-59.77c0-8.382-1.419-16.42-4.008-23.921c79.76-21.072,135.569-68.701,135.569-123.979c0-11.976-2.647-23.578-7.554-34.637 c22.26-4.604,34.803-10.767,36.003-11.378l3.859-1.954l0.408,0.006v-59.77C520.077,149.17,496.705,120.449,465.129,112.109z M471.649,291.052c0,48.965-52.15,91.149-126.62,109.728c-9.806-16.054-25.534-28.117-44.171-33.029 c-11.343,10.58-26.516,17.105-43.217,17.105c-16.698,0-31.874-6.525-43.216-17.105c-18.223,4.812-33.683,16.443-43.524,31.965 C98.65,380.623,48.433,339.101,48.433,291.052c0-11.597,2.976-22.798,8.426-33.407c17.396,2.707,33.337,3.824,47.665,3.824 c54.187,0,85.597-15.451,87.532-16.432l3.854-1.954l0.414,0.006v-59.775c0-2.187-0.104-4.359-0.292-6.496 c20.206-3.644,41.704-5.621,64.007-5.621c22.308,0,43.811,1.977,64.014,5.621c-0.188,2.143-0.295,4.309-0.295,6.502v59.77 l0.153,0.931l4.126,1.289c38.786,12.111,72.501,16.16,100.24,16.16c13.312,0,25.222-0.928,35.684-2.358 C468.936,269.288,471.649,279.986,471.649,291.052z'></path>{' '}
                  <circle cx='257.641' cy='316.185' r='57.583'></circle>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        }
        title={'Partners'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/testing'
        icon={
          <svg
            width='20'
            height='20'
            xmlns='http://www.w3.org/2000/svg'
            fill=''
            viewBox='0 0 24 24'
            stroke=''
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'></path>
            </g>
          </svg>
        }
        title={'Testing (Sandbox)'}
        fontIcon='bi-app-indicator'
      />
      {/* <SidebarMenuItem to='/builder' icon='switch' title='Layout Builder' fontIcon='bi-layers' /> */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          ──────
          <span style={{fontWeight: '600'}} className='menu-section text-uppercase fs-7 ls-1'>
            {' '}
            VISA{' '}
          </span>
          ──────
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
        icon={
          <svg
            fill=''
            height='20'
            width='20'
            version='1.1'
            id='Filled_Icons'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 24 24'
            enable-background='new 0 0 24 24'
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <g id='Validation-Filled'>
                {' '}
                <path d='M20.32,8.56c-0.51-1.22,0.38-3.41-0.54-4.33c-0.92-0.92-3.11-0.03-4.33-0.54C14.27,3.19,13.36,1,12,1S9.73,3.19,8.56,3.68 C7.33,4.19,5.14,3.3,4.22,4.22C3.3,5.14,4.19,7.33,3.68,8.56C3.19,9.73,1,10.64,1,12s2.19,2.27,2.68,3.44 c0.51,1.22-0.38,3.41,0.54,4.33c0.92,0.92,3.11,0.03,4.33,0.54C9.73,20.81,10.64,23,12,23s2.27-2.19,3.44-2.68 c1.22-0.51,3.41,0.38,4.33-0.54c0.92-0.92,0.03-3.11,0.54-4.33C20.81,14.27,23,13.36,23,12S20.81,9.73,20.32,8.56z M11,16.41 l-3.71-3.71l1.41-1.41L11,13.59l5.29-5.29l1.41,1.41L11,16.41z'></path>{' '}
              </g>{' '}
            </g>
          </svg>
        }
        title={'Issued'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/in-process'
        icon={
          <svg
            height='20'
            width='20'
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            fill=''
            stroke=''
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <g>
                {' '}
                <g id='loop_x5F_alt3'>
                  {' '}
                  <g>
                    {' '}
                    <path
                      fill=''
                      d='M28,16v2c0,1.102-0.898,2-2,2H11.996L12,16l-8,6l8,6l-0.004-4H26c3.309,0,6-2.695,6-6v-2H28z'
                    ></path>{' '}
                    <path
                      fill=''
                      d='M4,14c0-1.105,0.898-2,2-2h14v4l7.992-6L20,4v4H6c-3.309,0-6,2.688-6,6v2h4V14z'
                    ></path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        }
        title={'Pending'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/waiting-for-approval'
        icon={
          <svg
            fill=''
            height='20'
            width='20'
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 297 297'
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <path d='M251.01,277.015h-17.683l-0.002-31.559c0-31.639-17.358-60.726-48.876-81.901c-3.988-2.682-6.466-8.45-6.466-15.055 s2.478-12.373,6.464-15.053c31.52-21.178,48.878-50.264,48.88-81.904V19.985h17.683c5.518,0,9.992-4.475,9.992-9.993 c0-5.518-4.475-9.992-9.992-9.992H45.99c-5.518,0-9.992,4.475-9.992,9.992c0,5.519,4.475,9.993,9.992,9.993h17.683v31.558 c0,31.642,17.357,60.729,48.875,81.903c3.989,2.681,6.467,8.448,6.467,15.054c0,6.605-2.478,12.373-6.466,15.053 c-31.519,21.176-48.876,50.263-48.876,81.903v31.559H45.99c-5.518,0-9.992,4.475-9.992,9.993c0,5.519,4.475,9.992,9.992,9.992 h205.02c5.518,0,9.992-4.474,9.992-9.992C261.002,281.489,256.527,277.015,251.01,277.015z M138.508,110.362 c0-5.518,4.474-9.993,9.992-9.993s9.992,4.475,9.992,9.993v17.664c0,5.519-4.474,9.992-9.992,9.992s-9.992-4.474-9.992-9.992 V110.362z M141.433,173.956c1.858-1.857,4.436-2.927,7.064-2.927c2.628,0,5.206,1.069,7.064,2.927 c1.868,1.859,2.928,4.438,2.928,7.065s-1.06,5.206-2.928,7.064c-1.858,1.858-4.436,2.928-7.064,2.928 c-2.628,0-5.206-1.069-7.064-2.928c-1.859-1.858-2.928-4.437-2.928-7.064S139.573,175.816,141.433,173.956z M86.94,277.112 c8.152-30.906,50.161-64.536,55.405-68.635c3.614-2.826,8.692-2.828,12.309,0c5.244,4.1,47.252,37.729,55.404,68.635H86.94z'></path>{' '}
            </g>
          </svg>
        }
        title={'In process'}
        fontIcon='bi-app-indicator'
      />{' '}
      <SidebarMenuItem
        to='/superadmin/rejected'
        icon={
          <svg
            width='20'
            height='20'
            viewBox='0 -0.5 17 17'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            className='si-glyph si-glyph-deny'
            fill=''
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <title>799</title> <defs> </defs>{' '}
              <g stroke='' stroke-width='1' fill='' fill-rule='evenodd'>
                {' '}
                <path
                  d='M9.016,0.06 C4.616,0.06 1.047,3.629 1.047,8.029 C1.047,12.429 4.615,15.998 9.016,15.998 C13.418,15.998 16.985,12.429 16.985,8.029 C16.985,3.629 13.418,0.06 9.016,0.06 L9.016,0.06 Z M3.049,8.028 C3.049,4.739 5.726,2.062 9.016,2.062 C10.37,2.062 11.616,2.52 12.618,3.283 L4.271,11.631 C3.508,10.629 3.049,9.381 3.049,8.028 L3.049,8.028 Z M9.016,13.994 C7.731,13.994 6.544,13.583 5.569,12.889 L13.878,4.58 C14.571,5.555 14.982,6.743 14.982,8.028 C14.981,11.317 12.306,13.994 9.016,13.994 L9.016,13.994 Z'
                  fill=''
                  className='si-glyph-fill'
                >
                  {' '}
                </path>{' '}
              </g>{' '}
            </g>
          </svg>
        }
        title={'Rejected'}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          ───
          <span style={{fontWeight: '600'}} className='menu-section text-uppercase fs-7 ls-1'>
            {' '}
            Transaction{' '}
          </span>
          ───
        </div>
      </div>
      <SidebarMenuItem
        to='/superadmin/revenue'
        icon={
          <svg
            height='20'
            width='20'
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 612 612'
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <path d='M306,0C137.002,0,0,137.002,0,306s137.002,306,306,306s306-137.002,306-306S474.998,0,306,0z M562.116,323.16 l19.511,19.021c3.189,3.103,2.375,8.421-1.597,10.435l-24.315,12.307c-3.482,1.769-4.633,6.193-2.436,9.425l15.282,22.564 c2.491,3.684,0.63,8.727-3.672,9.896l-26.285,7.167c-3.77,1.022-5.783,5.129-4.29,8.745l10.429,25.165 c1.701,4.113-1.144,8.678-5.581,8.96l-27.191,1.726c-3.905,0.245-6.701,3.862-5.961,7.699l5.147,26.757 c0.838,4.37-2.87,8.274-7.271,7.65l-26.983-3.782c-3.874-0.545-7.338,2.43-7.387,6.34l-0.355,27.246 c-0.055,4.449-4.468,7.521-8.666,6.028l-25.661-9.137c-3.678-1.31-7.681,0.906-8.519,4.725l-5.82,26.616 c-0.949,4.345-5.9,6.469-9.7,4.168l-23.305-14.125c-3.348-2.026-7.711-0.649-9.296,2.919l-11.065,24.896 c-1.805,4.07-7.075,5.153-10.337,2.13l-19.988-18.519c-2.864-2.656-7.411-2.191-9.688,0.985l-15.845,22.161 c-2.589,3.623-7.968,3.623-10.557,0l-15.851-22.161c-2.271-3.182-6.818-3.641-9.688-0.985l-19.988,18.519 c-3.262,3.023-8.537,1.94-10.337-2.13l-11.059-24.896c-1.591-3.568-5.955-4.945-9.296-2.919l-23.305,14.125 c-3.807,2.301-8.752,0.177-9.7-4.168l-5.826-26.616c-0.832-3.819-4.829-6.034-8.513-4.725l-25.667,9.137 c-4.186,1.493-8.605-1.585-8.666-6.028l-0.343-27.246c-0.055-3.911-3.519-6.885-7.393-6.34l-26.977,3.782 c-4.413,0.624-8.115-3.28-7.271-7.65l5.147-26.757c0.734-3.837-2.062-7.454-5.961-7.699l-27.191-1.726 c-4.443-0.282-7.283-4.847-5.581-8.96l10.422-25.165c1.493-3.617-0.514-7.723-4.284-8.745l-26.292-7.167 c-4.29-1.169-6.163-6.218-3.666-9.896l15.276-22.564c2.191-3.231,1.047-7.656-2.436-9.425l-24.309-12.307 c-3.966-2.013-4.786-7.332-1.603-10.435l19.511-19.021c2.803-2.723,2.57-7.289-0.49-9.725l-21.328-16.952 c-3.482-2.766-3.213-8.14,0.532-10.545l22.95-14.7c3.286-2.111,3.978-6.628,1.475-9.627l-17.491-20.894 c-2.852-3.415-1.506-8.623,2.65-10.22l25.429-9.786c3.648-1.401,5.233-5.698,3.384-9.131l-12.919-23.99 c-2.111-3.917,0.257-8.752,4.651-9.48l26.879-4.461c3.856-0.636,6.273-4.517,5.153-8.268l-7.827-26.102 c-1.279-4.26,2.013-8.519,6.463-8.342l27.228,1.034c3.905,0.147,7.05-3.17,6.708-7.056l-2.411-27.142 c-0.392-4.437,3.69-7.938,8.011-6.879l26.457,6.493c3.794,0.93,7.546-1.677,7.999-5.563l3.097-27.069 c0.508-4.419,5.208-7.026,9.235-5.122l24.615,11.689c3.525,1.671,7.73-0.129,8.947-3.843l8.488-25.894 c1.383-4.223,6.512-5.838,10.074-3.164l21.757,16.408c3.121,2.35,7.595,1.426,9.541-1.958l13.525-23.654 c2.203-3.862,7.558-4.406,10.502-1.071l18.005,20.453c2.583,2.931,7.154,2.931,9.737,0l18.011-20.453 c2.938-3.335,8.286-2.791,10.502,1.071l13.519,23.654c1.94,3.39,6.42,4.308,9.541,1.958l21.757-16.408 c3.556-2.681,8.69-1.065,10.074,3.164l8.482,25.894c1.218,3.715,5.422,5.514,8.954,3.843l24.609-11.689 c4.015-1.903,8.721,0.704,9.229,5.122l3.103,27.069c0.441,3.886,4.198,6.499,7.993,5.563l26.463-6.493 c4.321-1.059,8.403,2.442,8.011,6.879l-2.411,27.142c-0.349,3.892,2.803,7.209,6.714,7.056l27.222-1.034 c4.449-0.171,7.742,4.082,6.463,8.342l-7.821,26.102c-1.126,3.745,1.291,7.626,5.153,8.268l26.879,4.461 c4.388,0.728,6.763,5.563,4.651,9.48l-12.919,23.99c-1.854,3.439-0.269,7.73,3.384,9.131l25.422,9.786 c4.156,1.597,5.502,6.805,2.65,10.22l-17.479,20.894c-2.509,2.999-1.818,7.521,1.469,9.627l22.938,14.7 c3.745,2.405,4.021,7.779,0.539,10.545l-21.328,16.952C559.552,315.865,559.319,320.431,562.116,323.16z'></path>{' '}
                  <path d='M351.888,344.911c-5.337-3.752-13.507-6.591-24.517-8.525v49.303c21.671-2.791,32.516-10.839,32.516-24.125 C359.887,354.226,357.218,348.681,351.888,344.911z'></path>{' '}
                  <path d='M251.85,252.744c0,7.344,2.791,12.944,8.391,16.781c5.588,3.849,14.07,6.818,25.435,8.917v-50.349 c-12.766,1.401-21.597,4.241-26.487,8.525C254.292,240.902,251.85,246.275,251.85,252.744z'></path>{' '}
                  <path d='M306,76.5C179.249,76.5,76.5,179.249,76.5,306S179.249,535.5,306,535.5c126.745,0,229.5-102.749,229.5-229.5 S432.745,76.5,306,76.5z M394.104,413.229c-15.649,12.766-37.889,20.716-66.732,23.856v27.014h-41.689V438.4 c-17.142-0.526-33.262-2.056-48.385-4.59c-15.123-2.534-27.662-6.071-37.626-10.618v-51.39c6.818,2.448,13.458,4.59,19.933,6.42 c6.463,1.842,13.109,3.415,19.933,4.719c6.812,1.316,13.978,2.368,21.5,3.152c7.509,0.783,15.735,1.273,24.651,1.438v-57.424 c-11.022-1.579-21.946-3.715-32.779-6.432c-10.839-2.699-20.588-6.763-29.235-12.191c-8.654-5.416-15.692-12.589-21.108-21.506 c-5.422-8.911-8.127-20.453-8.127-34.609c0-11.542,2.099-21.806,6.291-30.808c4.198-9.003,10.227-16.781,18.091-23.342 c7.87-6.555,17.442-11.836,28.715-15.869c11.273-4.015,23.99-6.812,38.152-8.391v-27.001h41.696v26.218 c12.754,0.698,25.735,2.148,38.935,4.327c13.195,2.185,25.306,5.208,36.322,9.045v51.922 c-26.922-8.739-52.014-13.641-75.258-14.682v58.213c11.01,1.75,21.891,4.064,32.644,6.952 c10.753,2.883,20.361,7.075,28.844,12.589c8.476,5.502,15.386,12.717,20.716,21.634c5.331,8.911,7.999,20.367,7.999,34.345 C417.568,382.898,409.746,400.468,394.104,413.229z'></path>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        }
        title={'Revenue'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/wallet'
        icon={
          <svg
            width='20'
            height='20'
            viewBox='-1.5 0 33 33'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            fill=''
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <title>wallet</title> <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
              <g id='Page-1' stroke='' stroke-width='1' fill='' fill-rule='evenodd'>
                {' '}
                <g id='Icon-Set-Filled' transform='translate(-259.000000, -776.000000)' fill=''>
                  {' '}
                  <path
                    d='M283,799 L289,799 L289,797 L283,797 L283,799 Z M287,787 L259,787 L259,807 C259,808.104 259.896,809 261,809 L287,809 C288.104,809 289,808.104 289,807 L289,801 L282,801 C281.448,801 281,800.553 281,800 L281,796 C281,795.448 281.448,795 282,795 L289,795 L289,789 C289,787.896 288.104,787 287,787 L287,787 Z M287,778 C287,777.447 286.764,777.141 286.25,776.938 C285.854,776.781 285.469,776.875 285,777 L259,785 L287,785 L287,778 L287,778 Z'
                    id='wallet'
                  >
                    {' '}
                  </path>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        }
        title={'Wallet'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/superadmin/report'
        icon={
          <svg
            height='20'
            width='20'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <g transform='translate(0 -1)'>
              <g>
                <g>
                  <path d='M503.467,478.867h-8.533v-8.533c0-4.719-3.823-8.533-8.533-8.533s-8.533,3.814-8.533,8.533v8.533h-25.6v-8.533 c0-4.719-3.823-8.533-8.533-8.533s-8.533,3.814-8.533,8.533v8.533h-25.6v-8.533c0-4.719-3.823-8.533-8.533-8.533 s-8.533,3.814-8.533,8.533v8.533h-25.6v-8.533c0-4.719-3.823-8.533-8.533-8.533s-8.533,3.814-8.533,8.533v8.533h-25.6v-8.533 c0-4.719-3.823-8.533-8.533-8.533s-8.533,3.814-8.533,8.533v8.533h-25.6v-8.533c0-4.719-3.823-8.533-8.533-8.533 c-4.71,0-8.533,3.814-8.533,8.533v8.533h-25.6v-8.533c0-4.719-3.823-8.533-8.533-8.533s-8.533,3.814-8.533,8.533v8.533h-25.6 v-8.533c0-4.719-3.823-8.533-8.533-8.533s-8.533,3.814-8.533,8.533v8.533h-25.6v-8.533c0-4.719-3.823-8.533-8.533-8.533 c-4.71,0-8.533,3.814-8.533,8.533v8.533h-25.6v-8.533c0-4.719-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.814-8.533,8.533v8.533 h-25.6v-8.533c0-4.719-3.823-8.533-8.533-8.533s-8.533,3.814-8.533,8.533v8.533H34.133v-51.2h8.533 c4.71,0,8.533-3.814,8.533-8.533s-3.823-8.533-8.533-8.533h-8.533V385h8.533c4.71,0,8.533-3.814,8.533-8.533 s-3.823-8.533-8.533-8.533h-8.533v-25.6h8.533c4.71,0,8.533-3.814,8.533-8.533s-3.823-8.533-8.533-8.533h-8.533v-25.6h8.533 c4.71,0,8.533-3.814,8.533-8.533c0-4.719-3.823-8.533-8.533-8.533h-8.533V257h8.533c4.71,0,8.533-3.814,8.533-8.533 s-3.823-8.533-8.533-8.533h-8.533v-25.6h8.533c4.71,0,8.533-3.814,8.533-8.533s-3.823-8.533-8.533-8.533h-8.533v-25.6h8.533 c4.71,0,8.533-3.814,8.533-8.533s-3.823-8.533-8.533-8.533h-8.533V129h8.533c4.71,0,8.533-3.814,8.533-8.533 s-3.823-8.533-8.533-8.533h-8.533v-25.6h8.533c4.71,0,8.533-3.814,8.533-8.533s-3.823-8.533-8.533-8.533h-8.533v-25.6h8.533 c4.71,0,8.533-3.814,8.533-8.533S47.377,26.6,42.667,26.6h-8.533V9.533C34.133,4.814,30.31,1,25.6,1 c-4.71,0-8.533,3.814-8.533,8.533V26.6H8.533C3.823,26.6,0,30.414,0,35.133s3.823,8.533,8.533,8.533h8.533v25.6H8.533 C3.823,69.267,0,73.081,0,77.8s3.823,8.533,8.533,8.533h8.533v25.6H8.533c-4.71,0-8.533,3.814-8.533,8.533S3.823,129,8.533,129 h8.533v25.6H8.533c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533h8.533v25.6H8.533c-4.71,0-8.533,3.814-8.533,8.533 s3.823,8.533,8.533,8.533h8.533v25.6H8.533c-4.71,0-8.533,3.814-8.533,8.533S3.823,257,8.533,257h8.533v25.6H8.533 c-4.71,0-8.533,3.814-8.533,8.533c0,4.719,3.823,8.533,8.533,8.533h8.533v25.6H8.533c-4.71,0-8.533,3.814-8.533,8.533 s3.823,8.533,8.533,8.533h8.533v25.6H8.533c-4.71,0-8.533,3.814-8.533,8.533S3.823,385,8.533,385h8.533v25.6H8.533 c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533h8.533v25.6H8.533c-4.71,0-8.533,3.814-8.533,8.533 c0,4.719,3.823,8.533,8.533,8.533h8.533V487.4c0,4.719,3.823,8.533,8.533,8.533h25.6v8.533c0,4.719,3.823,8.533,8.533,8.533 s8.533-3.814,8.533-8.533v-8.533h25.6v8.533c0,4.719,3.823,8.533,8.533,8.533c4.71,0,8.533-3.814,8.533-8.533v-8.533h25.6v8.533 c0,4.719,3.823,8.533,8.533,8.533c4.71,0,8.533-3.814,8.533-8.533v-8.533h25.6v8.533c0,4.719,3.823,8.533,8.533,8.533 s8.533-3.814,8.533-8.533v-8.533h25.6v8.533c0,4.719,3.823,8.533,8.533,8.533s8.533-3.814,8.533-8.533v-8.533h25.6v8.533 c0,4.719,3.823,8.533,8.533,8.533c4.71,0,8.533-3.814,8.533-8.533v-8.533h25.6v8.533c0,4.719,3.823,8.533,8.533,8.533 s8.533-3.814,8.533-8.533v-8.533h25.6v8.533c0,4.719,3.823,8.533,8.533,8.533s8.533-3.814,8.533-8.533v-8.533h25.6v8.533 c0,4.719,3.823,8.533,8.533,8.533s8.533-3.814,8.533-8.533v-8.533h25.6v8.533c0,4.719,3.823,8.533,8.533,8.533 s8.533-3.814,8.533-8.533v-8.533h25.6v8.533c0,4.719,3.823,8.533,8.533,8.533s8.533-3.814,8.533-8.533v-8.533h8.533 c4.71,0,8.533-3.814,8.533-8.533S508.177,478.867,503.467,478.867z' />{' '}
                  <path d='M281.6,96.467v-54.4c0-8.525-6.938-15.471-15.462-15.471H76.8v85.333h189.338 C274.662,111.929,281.6,104.991,281.6,96.467z' />{' '}
                  <path d='M435.2,207.4V153c0-8.525-6.938-15.471-15.462-15.471H76.8v85.333h342.938C428.262,222.862,435.2,215.925,435.2,207.4z' />{' '}
                  <path d='M366.933,318.333v-54.4c0-8.525-6.938-15.471-15.462-15.471H76.8v85.333h274.671 C359.996,333.796,366.933,326.858,366.933,318.333z' />{' '}
                  <path d='M494.933,429.267v-54.4c0-8.525-6.938-15.471-15.462-15.471H76.8v85.333h402.671 C487.996,444.729,494.933,437.792,494.933,429.267z' />{' '}
                  <path d='M460.8,35.133h42.667c4.71,0,8.533-3.814,8.533-8.533s-3.823-8.533-8.533-8.533H460.8c-4.71,0-8.533,3.814-8.533,8.533 S456.09,35.133,460.8,35.133z' />{' '}
                  <path d='M418.133,35.133h8.533c4.71,0,8.533-3.814,8.533-8.533s-3.823-8.533-8.533-8.533h-8.533c-4.71,0-8.533,3.814-8.533,8.533 S413.423,35.133,418.133,35.133z' />{' '}
                  <path d='M418.133,69.267h34.133c4.71,0,8.533-3.814,8.533-8.533s-3.823-8.533-8.533-8.533h-34.133 c-4.71,0-8.533,3.814-8.533,8.533S413.423,69.267,418.133,69.267z' />{' '}
                  <path d='M503.467,52.2H486.4c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533h17.067c4.71,0,8.533-3.814,8.533-8.533 S508.177,52.2,503.467,52.2z' />{' '}
                </g>{' '}
              </g>{' '}
            </g>{' '}
          </svg>
        }
        title={'Wallet Report'}
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
          ─────
          <span style={{fontWeight: '600'}} className='menu-section text-uppercase fs-7 ls-1'>
            {' '}
            Settings{' '}
          </span>
          ─────
        </div>
      </div>
      <SidebarMenuItem
        to='/superadmin/apisetting'
        icon={
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill=''
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <path
                d='M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z'
                fill=''
              ></path>{' '}
            </g>
          </svg>
        }
        title={'API Setting'}
        fontIcon='bi-app-indicator'
      />
    </>
  )
}

export {SidebarMenuMain}
