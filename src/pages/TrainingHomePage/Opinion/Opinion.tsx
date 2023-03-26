import styles from './Opinion.module.scss'

interface IOpinioProps {
  opinion: string;
  author: string;
  role: string;
}

const Opinion = ({opinion, author, role} : IOpinioProps) => {
   return <div className={styles.opinionContainer}>
    <h4>{opinion}</h4>
    <p className={styles.author}>{author}</p>
    <div className={styles.opinionsBelt}></div>
    <p className={styles.role}>{role}</p>
   </div>;
};

export default Opinion;