import {css} from '@emotion/react'

export const main = css`
  min-height: 80vh;
  height: auto;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  overflow: hidden;
`
export const navText = css`
  font-size: 34px;
  font-weight: bolder;
`
export const footer = css`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`
export const title = css`
  font-weight: bolder;
  text-decoration: none;
  font-size: 5rem;
`
export const Box = css`
  position: fixed;
  zindex: 0;
  top: 0;
`