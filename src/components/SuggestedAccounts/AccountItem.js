import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d9437e9e34fa8078add69cf46424e269~c5_100x100.jpeg?x-expires=1691132400&x-signature=TSChJnYGrb1BrxyhcEfxjnYWr7E%3D"
                alt=""
            />
            <div className={cx('account-info')}>
                <p className={cx('account-name')}>
                    <strong>Hieu Nobita</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('nickname')}>HieuNobita</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
