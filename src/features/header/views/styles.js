import { css } from 'astroturf'

export const styles = css`
    .header {
        position: fixed;
        padding: 20px;
        box-shadow: 0px 5px 10px #0000002b;
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        z-index: 9999;
        background-color: inherit;
        .process_line {
            background-color: #494eec;
            width: 0;
            height: 3px;
            position: absolute;
            bottom: -2px;
            left: 0;
        }
        .input {
            opacity: 0;
            cursor: pointer;
        }

        .input, .custon_input {
            width: 150px;
            height: 35px;
        }

        .custon_input {
            border-radius: 8px;
            background-color: #5358ed;
            display: inline-flex;
            color: white;
            font-size: 14px;
            font-weight: 700;
            position: relative;
            cursor: pointer;

            &:hover {
                background-color: #494eec;
            }
            span {
                position: absolute;
                left: 16px;
                top: 7px;
            }
        }
    }
`
