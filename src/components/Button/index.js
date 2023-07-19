import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    text = false,
    rounded = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    disable = false,
    className,
    leftIcon,
    rightIcon,
    ...passProp
}) {
    let Comp = 'button';

    const _props = {
        onClick,
        ...passProp,
    };

    if (disable) {
        // delete _props.onClick;
        Object.keys(_props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof _props[propKey] === 'function') {
                delete _props[propKey];
            }
        });
    }

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        rounded,
        text,
        disable,
    });
    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
