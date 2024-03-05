import s from './Header.module.scss';
import logo from '../../assets/images/logo.jpg';

export default function Header() {
  return (
    <header className={`${s.header} d-flex flex-row align-items-center`}>
      <i className="fa-solid fa-bars mr-15"></i>
      <div className='flex-fill'>
        <img src={logo} alt="logo cookchef" />
      </div>
      <ul>
        <button className='mr-5 btn btn-reverse-primary'>
        <i className="fa-solid fa-basket-shopping mr-5"></i>
        <span>panier</span></button>
        <button className='btn btn-primary'>connexion</button>
      </ul>
    </header>
  )
}
