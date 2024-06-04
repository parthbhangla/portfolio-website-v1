import styles from "./SkillsStyles.module.css";
import checkmark from "../../assets/checkmark-dark.svg";
import SkillCard from "../../common/SkillCard";

function Skills() {
  return (
    <section id="Skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillCard src={checkmark} skill="HTML" />
        <SkillCard src={checkmark} skill="CSS" />
        <SkillCard src={checkmark} skill="Javascript" />
        <SkillCard src={checkmark} skill="Typescript" />
        <SkillCard src={checkmark} skill="Node" />
        <SkillCard src={checkmark} skill="AWS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillCard src={checkmark} skill="React" />
        <SkillCard src={checkmark} skill="Angular" />
        <SkillCard src={checkmark} skill="Vue" />
        <SkillCard src={checkmark} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillCard src={checkmark} skill="Redux" />
        <SkillCard src={checkmark} skill="Git" />
        <SkillCard src={checkmark} skill="Bootstrap" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
