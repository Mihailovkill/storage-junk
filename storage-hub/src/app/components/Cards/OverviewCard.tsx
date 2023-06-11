import styles from "@/styles/components/Cards/OverviewCard.module.css";

interface CardProps {
  title: string;
  description: string;
}

const OverviewCard = ({ title, description }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default OverviewCard;
