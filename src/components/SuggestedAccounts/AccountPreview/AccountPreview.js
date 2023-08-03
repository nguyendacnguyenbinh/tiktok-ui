import Image from '~/components/Image/Image';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d9437e9e34fa8078add69cf46424e269~c5_100x100.jpeg?x-expires=1691132400&x-signature=TSChJnYGrb1BrxyhcEfxjnYWr7E%3D"
                    alt=""
                />
                <Button primary small className={cx('following-btn')}>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <div className={cx('account-info')}>
                    <p className={cx('account-name')}>
                        <strong>Hieu Nobita</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('nickname')}>HieuNobita</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Follower</span>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Like</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
