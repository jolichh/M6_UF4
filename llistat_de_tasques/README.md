# Llistat de tasques
## Objectiu
Crear una llista de tasques amb un formulari per afegir-ne.
Cada tasca es podrà eliminar o modificar el seu estat a completada.

## Descripció components
**Component LlistatTasques**
- Crea el component general que contindrà el llistat de tasques. Inicialment només ha de tenir un títol.
**Component Tasca:**
- Crea el component Tasca. Inicialment ha de tenir un text i un botó per eliminar-les
- Fes que el botó per eliminar sigui un React icon.
- Fes que tingui una nova prop que sigui completada (boolean)
    - completada = true → className = tascaCompletada → css = background i text tatxat (text-decoration: line-throught)

**Component FormulariTasques:**
- Ha de tenir un input i un botó.

## Funcionalitat
**Component LlistatTasques**
- Fes que tingui un estat que sigui el llistat de tasques. Aquest array serà d’objecte, és a dir, tindrà la propietat nom (string) i completada (boolean).
    ```
    const[tasques, setTasques]= useState([]);
- Mostra el component FormulariTasques, fes que la propietat onSubmit cridi a la funció afegirTasca.
- Mostra totes les tasques. Tingues en compte els seus atributs i funcions
    - Atributs: id, text, completada
    - Funcions: completarTasca i eliminarTasca
    - Fes que l’id sigui l’index de l’array

- Crearem la funció afegirTasca que afegirà la nova tasca a l’array.
    ```
    const afegirTasca= tasca => {
    const tasquesActuals = ...;
    setTareas(tasquesActuals );
    }
    <ComponentFormulari
    funcAfegirTasca={afegirTasca}
    />
- Crea la funció eliminarTasca, assigna-li a la variable tasques el nou array amb la tasca eliminada.
    ```
    const eliminarTasca = id => {
    const tasquesRestants = ...;
    setTasques(tasquesRestants);
    }
- Crea la funció completarTasca, fes que el seu valor booleà sigui l’invers de l’actual.
    ```
    const completarTasca = id => {
    const tasquesActuals = ...;
    setTasques(tasquesRestants);
    }

**Component Tasca**
- Si es fa click al div de la tasca voldrem que es completi, per tant, cridarem a la funció completarTasca. A aquesta funció li hauràs de passar l’id.
- Si es fa click al botó d’eliminar voldrem que s’elimini la tasca, per tant, cridarem a la funció eliminarTasca. A aquesta funció li hauràs de passar l’id.

**ComponentFormulari**
- Crea un estat textTasca inicialment buit
- Afegeix una funcionalitat onChange a l’input, fes que s’actualitzi l’estat textTasca en funció del valor.
    ```
    const canviTextTasca = e => {
    setTextTasca(e.target.value);
    console.log('value is:', e.target.value);
    };
- Fes que la propietat onSubmit del formulari cridi a la funció enviarForm.
    Defineix aquesta funció dins del component. Inicialment fes un preventDefault, defineix la tasca amb el text de l’input i el valor booleà false i finalment fes un submit
    ```
    const enviarForm = e => {
    e.preventDefault();
    const tascaNova= {
    titol: {textTasca},
    completada: false
    }
    props.funcAfegirTasca(tascaNova);
    }