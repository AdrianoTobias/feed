import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/adrianotobias.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Adriano Tobias</strong>
              <time title="12 de Agosto, às 21h:06m" dateTime="2024-08-12 21:06:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Adriano, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}