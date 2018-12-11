import { ThemeContext } from './Theme';
import React from 'react';

function Button(props) {
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    return (
                        <button
                            {...props}
                            style={{
                                backgroundColor: theme.background,
                                color: theme.foreground
                            }}
                        >

                        </button>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default Button;