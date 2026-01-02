import styles from './Footer.module.css';
// import AppNav from './AppNav';
// import Logo from './Logo';
export default function Footer(){
    return (
    
        
        <footer className={styles.header}>
          <p className={styles.copyright}>
            &copy; Copyright {new Date().getFullYear()} by WorldwiseInc
          </p>
        </footer>
      
    );
}