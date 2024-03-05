// Content.jsx
import Recipe from '../Recipe/Recipe';
import s from './Content.module.scss';

export default function Content() {
    return (
        <div className={`flex-fill container p-20`}>
            <h1 className='my-30'>Découvrez nos nouvelles recettes</h1>
            <div className={`card p-20 ${s.grid} ${s.contentCard}`}>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
            </div>
        </div>
    );
}
