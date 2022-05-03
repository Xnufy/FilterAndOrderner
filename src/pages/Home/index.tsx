/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {FlatList, Modal} from 'react-native';
import List from '../../components/List';
import {
  Container,
  ViewTop,
  ViewInput,
  Icon,
  InputSearch,
  ButtonOrder,
  ContainerPopUp,
  PopUp,
  ButtonPopUp,
  Text
} from './styles';

export default function Home() {
  const data = [
    {
      key: '1',
      img: 'https://lh3.googleusercontent.com/7ZrwdkNVWATZKpTg4Or7HiVVi6IZMnrudw3sfnUUoOGjecRtcWe_Q3u81NLRFV0mCtMeIhWoLoRq-d8Zo0JRI_YdMGCGH2GJDioSggDI-67O74W5am3mLIF76WG5b5N2TYTmQ_gm',
      name: 'Pomerânia (Spitz Alemão)',
      description:
        'Tanto Spitz pequeno quanto Spitz anão são chamados de Pomerânia. Esta raça de porte muito pequeno se tornou bastante popular nos últimos anos. São cães afetuosos, inteligentes e muito ligados aos seus donos.',
    },
    {
      key: '2',
      img: 'https://lh3.googleusercontent.com/MzvJBskTLNooDXSVlUF5ItYme8g_o7JeekPZXVnc6tn_LRf1zTXY5EHzY1fDndcSJ7lmP56E7mII85FGZgkpG4IyaLZIrdFcBLHXVCMnCPZDEm6Pf_XV2v21K3JGRwE8tIYbN7g-',
      name: 'Bulldog Francês',
      description:
        'O Bulldog Francês está no top três das raças mais registradas no Brasil, de acordo com a Confederação Brasileira de Cinofilia (CBKC). Estes animais são divertidos, inteligentes, amigáveis, carismáticos, sociáveis e muito companheiros.',
    },
    {
      key: '3',
      img: 'https://lh5.googleusercontent.com/4A4W17orY2W67d7rW6qX6hkxG4JqhWFbYYzMVYBY8KWY06CnezI3lRDWGBvTt0WdQJbSr1WhGDImVgyyHzcBaebRE6OSZ1FoDK6TUmpbABbLa5iNgCKIai3Z6toS7t--mnnAY0g1',
      name: 'Shih Tzu',
      description:
        'O Shih Tzu é um cão calmo, porém ativo, dócil, independente, alegre, curioso, divertido e sociável. A raça apresenta alta expectativa de vida e é ideal para companhia, especialmente para famílias com crianças.',
    },
    {
      key: '4',
      img: 'https://lh4.googleusercontent.com/sLkmIi6bLBfLmF69aT4M7_GN99Nf4LaXGqB-wvWHSX5GXIhcTeSijrn4P2MEi62tfgkamQMdiW6nNGtHR2WYN_56PCfWUJYT9jGdL5m-K94-oXpcxyqtl2zDiE_7gmxQ2-veSYla',
      name: 'Rottweiler',
      description:
        'Rottweiler é uma raça de cães molossos desenvolvida na Alemanha. Criada por açougueiros da região de Rottweil para o trabalho com o gado, logo tornou-se um eficiente cão de guarda e boiadeiro, e cão de tração. Devido à sua utilidade, tornou-se popular em todo o mundo ao decorrer do século XX.',
    },
    {
      key: '5',
      img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUTEhIVFhUXGBUXGBcYEhcVGhkYFRgWFxgaFxUYHSggGBomGxgWITEiJSkrLi4uGCAzODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAMCAQj/xAA5EAACAQIEBAMGBQMEAwEAAAAAAQIDEQQSITEFBkFRE2FxByIygZGhQrHB4fAUctEjM1JigpLxJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPirVUVeTsgPsFIxvM/EqdVuGAp18Om9aeI/1cutm4Sjvtor+pQuaPaTxNVHBR/pY20j4Sz+rlUTv6pIDdAZN7IudcVicTUwuKquqnTdWnJximskoqcW4pXTzpq+1nr0NZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA83800OHUXUqvNN6U6S+OcuiS6K+72RVvaZ7QXg5/wBJh9K7gpyqNXUIybSUU95O19dErd9M35A4dPH8Rz1pSqZF41SUpOTlKLSppyerWZtpf9WBrvFucHTpSllULKOa7vlct7vsin8N5jxWKxUKes4y2vZrLmV5N20SRYcfxGjgpLxpRi601CN45m7b2V1aK7+YwtfB0azqwilJe5PLHKrVLNSttulpvqBY4qFPZ/dRWm9m3qR/F54LGRdCo6NV9YZ4uS804u8X5mfe0a+NpQjTp58ktHBpvJ10aWrVtFcpXEKNGliIqnWlaMMyhGChOEsscqu1dyzOSfbL5gaFwbgUuHY+niMLSqVsOn4dSPx1KUa3u542V5wTSb3aX22Iovs5xE/6SlVrVM8n4kJzta+SUkm7dbJF5TA/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGae13kqWKUcZh43q045akVvOmrtOK6yi23bdpvqkiC9kjpYbD1K873qzks1nbLRVopPZ+9KTf8AcbQVnD8o0KGEnh4qU4udaqs1m71JOTirW0tZfIDC3jFjsSqvEIXp1ZRUajlUUoxqT8OMqNmo5IStdLom9W7Hvisd4Tjh5TeWznNxlJSm9lFON2rtJXWtokzz5y28Dl/p1fCvNUSlKUvCeiajdtau1tvsiiV8RKVSU29W77arRJW8klt5+YE1xPGRg4vDRdNRytNy9++WLalHaTe93prY5KnF/Gv40U5LaSjGE/TTSX0+p4Qp1K0FNSSTSWt/ea/Fe3nu9zjrUnDez81d223XTW4Gr8j82YenRp4W8nKpV928b/7r1Tl03fb5mp8Dr56Mbu7jeLfdx0/Q/nHkbh7xGMoKMnFwl4rdr/A015LWy+b7H9Bcsu0akb6+JPT0k039UBNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyL214WtTpRcWv6eUtVbVS1sv7d/nYyKpJ2dlZ2av0S6s/qzi2DhWhkqRjJN7SSafXZmc8Z9lWHnmnTkqNtd24pR12k9P0Ax2tid9WoqyittEkrpequfOtWUYwi5TeiUU231St1t9jQn7Lc6hNYpWaTyztdJ7WS29C98l8gYfAvxFmqVGrOpPT5Qj+FfcCucn8tvhtGpi6+tTL8PVy/DTj6ysizcElUhGDk/ftFy7NvWT+cmyV4thlVmrr3Yapf9rb/JEJxLGuj0bb0SW7b2sBdsPilLTZ9u/odBUcBXre7Oo0lHXKvPu/qi04fERqK8Xf9PUD1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAReNqXnvpH/AOs8eIUadem4yu4yVpK9lZ73OnwVKbb77eh+ypJyen8QHjwvh8IuVVxTm7JOyWWMVZRiui/ySMj5p7WR+Tn0QHJUp2u+hGx4YpyzyXouxK1lJtdj6e2gETjKeWMu1iB4ViJuorStpdtNll4s0qcr9mQ3AcH4cE2tXv6/4AsfCuJ+JKVOVs8UmrP4o7Xt3T39USZn2JxThVVSDtKL0fdPS0l1uXHg3FYYmGaPxLSUeqf+AJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcOJglJtaM8YJ3vFxb7Ns9OJKpmhkSatK93btb9StcfWLScqSp54axeeUb+T0AssIT/FJL0/c6YQSIXgPEKlWGeUk27JwtbK+zd9yZhWT7r1A/ZRPKqrHQpIj+I1Wk7egEZi26s8vS528RgowUY72t8kfHCaSUc1jqlRb1e7t9AKpxbB5YK2/wCd2tzk4fiJYeoqke/fdPdP+dLlqx2Duvp9rFaxtKzt0Tf5r9wL9g8TGrBTg7p/xr1PYp3KnEPCvTl8Dlo+zf6bIuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHjiZWV3tf/JG1feV7aElinor9/wBGcVrbagRSwTw9VulJZKiV0+ko6qz8yYw81NZuvVHFhcQpNwkkrfD6ft+hzYGtKFTK3u2n5+f5AT2ZPYjeKVVGLb/jO7NYrXM+PjBe90tb1bsgJ7A07QivL+fc7JHhg53hF/8AVfkfVSoB4YmRXOJ4fW/cmsbNJXb2KPx3mF5vCox8SpPaKT/9n2XmB11sWkrZktPIuPLHElXorW8o+6/Ps/oZ/wAP5VqzWaunKT6Jxil6Wu/uSHLeBngMTeMpOlPSdOT+G/4ovql29QNIB+Jn6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc2NXw/wB36M5KmjT9Tsxz935ojpVNL+QHHwmmquIqN6qEbfOb0fraLOrF4BqUZPo9z65ao2jUm/xz09Iq355jv4i/c+cfzQHPOdtTMPaVjGlTSesqkfpG/wDlGiYyrliYvzxxBVMbCG6p2T9ZO7+1gNk4NUk6MLv8K/n1OuclG7bt+xD8GxzlSjbtql8/2OLGV61V5YwUul27Qj/c+r8lcD94m6mJqQpwvGLvrZ7LeT6W8ut0dnD+C0aDapQUpvWUnu33lLq/L7EfSxTo3hTm69dpZ5tWp0l2SWy623el327eX+I1alopJrrLW7fp/PkBM5WulvuVnmWc0mopN9O/yLlKi+pB8bw0eqWul+24EZ7POZJ1pTw9X4oq8G97LRr8mXsyjlFKGPjr7ybi9d1JNJry1RqyA/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDxWpZRXm39F+5Dzr+5Jo7uLVk5xX/FP6yt/j7kPSqxniYUYNfE3P0irtfYC0cOoeHShF7qKv69fvc5OLV7OMfWT/ACX6kmV3iVb/AFpa7JL7fuwIzmPiKjFRW7MExNOtXxtqUk5Tn+LRJ7u/obBzXilBTbeqhJr191O3yb+pizxa8XPHVp33ttvqvzQGp8H47i3RhCcaUbOcGoykrOnLK21b4dL3TJ3C56i/3cy6+G9vK6+H8yL5UUKuEVSLcm73zO7XfM+r8+p5QqOnJ3jTj3kovM10s72X0As8XCNPw4K17rRWu+tvL/JOYTD+BTi23ra0aa/X9SrcNquT1bbsopa6OT/jLhTg5U7qLlKF2o3tdrpr3A/Zyd1Zyva9r3Ibj+KtF5k9NUTuBjFXaTV7NX3s+nydyD5tpXozfZafUCp8rLxsbh5xStmqp+lJtr73XzNaRknInFcNhISr4iooxhRlLa7vUnmait5S0Wi8zhxHO2Mx8pyjF0sM3anG9nNXSk5W3SV/K/ewGz+LHuvqj7M04NXdWrSoU7u7vJ/8YpXb8uy82jS0AAAAAAAAAAAAAAAAAAAAAAAAB5YnERpxcpOyX8siGXMkZKbhG6i2r30ut7O2ttnbrpuj15i5ehjcmepUjkzNKEsqbkkryXVq2nqyrS9llLIqccXXjFOTWuylutGtAPjivGKilh40afizr1HFtP4UlJ5n5XST7K7KDz7isVgsdKD/ANNL3qVSCcXKMk80s1923JP6eusctck08HUjNVpzyRajFqyTlvLfV2uic4pwijiUlWpxqJbKSUlfvZ6XAyPkfmqtL3a2Im5tttTlpGC65t3t90XCGPpSblGpGT3bzJ7/ADK7z5gq2GqVKeDwWWE4U0qlOmle2eUrtbW2S82VDF0cZSrQyYV+7DLlcNHdatvrawFi9oPEVFTiss88IqKurrVttfYnfZdyfh5cOf8AUYRRqVZTvOWs5wveEk2rxWui8r9SY5I4ZKrhYTrUfDlqrP3nZOyae9i4YagoRUVsgMj4jThwjFLD0f8AUjOOdxk8qtKUkk3Z9nr/ABTVfjGBqyipKMpJXlGFmoX7tta7lp5i5Sw2NlGdWLzxVlKLs7br839TN+YfZnibzjh4pwe0ouFN6tvXvu/qBZMNxbBU1mp52942inp11zW37M9eFcZVartNQtpNVWnH+6nazXmVzhvKHEqWWl4anSioqLfhxaS3T1s+mqRacNy3XptOEI+ac0l9rgTUcS6cb1GrrST2W9m/rr/5FW584p/+eNOHxVXou8e/87E1Ll/EVnJ15ws1bw1JuO1m28t2+py4zkN16/jVcS1bSMIRVklsry30SAz+rw5+C3KEpKCclGKbcmtkkureh58OlVq2SjK9lG2RrLbol9PobLg+A06aSvKXrZfkkd9HC04fDCK9IpfcCC5K4KsNSbcX4k2nKT3aWyt0S1+pYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=',
      name: 'Pug',
      description:
        'Pugs são de origem chinesa, mas graças ao Duque de Windsor recuperaram sua popularidade na Inglaterra há alguns séculos. São cães sensíveis, afetuosos e companheiros, mas podem ser reservado com estranhos.',
    },
    {
      key: '6',
      img: 'data:image/jpeg;base64,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',
      name: 'Golden Retriever',
      description:
        'São cães de porte grande, calmos, dóceis, brincalhões, amigáveis, leais e muito apegados ao tutor dono.',
    },
    {
      key: '7',
      img: 'https://lh3.googleusercontent.com/6YyvuroKr6d3qhj7KmZY2Oa7OTmqpNLYDDAdIrHopUkzph6nN2d07wi5Ak3aid61aGEMHq7aqaSL5QPOSzkDG_Sdqvq9u_c7LwjX5WYjTs-ZZOeGeM3zd5HSbPhVMEyMN-KCVVJ6',
      name: 'Pastor Alemão',
      description:
        'Uma das raças mais admiradas de todos os tempos, o Pastor Alemão é um cão do grupo dos animais de pastoreio e guarda. São fortes, ágeis, vigilantes, corajosos, inteligentes, fiéis e obedientes. É um cão esportivo que necessita de espaço.',
    },
    {
      key: '8',
      img: 'https://lh3.googleusercontent.com/Jl4wQlt5PqDGlta24FdWa0_LrT6XAImjNRBBqosk2LC_09JEiL1Gh4JARZtoMX8j7OL2K3-0-LDTdOMER10fK7Lnp8TZ-qxkuUyJetXneIZtw9T8JYYS_EmlE1sOXCLFe_2CxNlY',
      name: 'Yorkshire Terrier',
      description:
        'Yorkshires são ativos, repletos de vida, afetuosos e corajosos. Adaptam-se bem à vida em apartamento, mas seu temperamento esportivo requer exercícios.',
    },
    {
      key: '9',
      img: 'data:image/jpeg;base64,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',
      name: 'Border Collie',
      description:
        'A raça é originária da Grã-Bretanha. São animais muito elegantes, ágeis, ativos, vigorosos, inteligentes e obedientes. São mundialmente reconhecidos como cães de pastoreio e de atividades de agility.',
    },
    {
      key: '10',
      img: 'data:image/jpeg;base64,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',
      name: 'Vira Lata',
      description:
        'Vira-lata ou rafeiro é a denominação dada aos cães ou gatos sem raça definida, SRD, sendo CRAND e GRAND, como são geralmente referenciados em textos veterinários. Em algumas regiões do Brasil também são conhecidos como pé-duro, guaipeca, bajariva, totó e cusco.',
    },
  ];

  const [searchtext, setSearchText] = useState('');
  const [popup, setPopUp] = useState(false);
  const [list, setList] = useState(data);
  const [invert, setInvert] = useState(false);

  function HandleOrder() {
    let newList = [...data];

    if (invert == false) {
      newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
      setInvert(true);
      setList(newList);
    } else {
      newList.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));
      setInvert(false);
      setList(newList);
    }
  }

  useEffect(() => {
    if (searchtext === '') {
      setList(data);
    } else {
      setList(
        data.filter(t => {
          if (t.name.toLowerCase().indexOf(searchtext.toLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }
        }),
      );
    }
  }, [searchtext]);

  return (
    <>
    <Container>
      <ViewTop>
        <ViewInput>
          <Icon name="search" />
          <InputSearch
            value={searchtext}
            onChangeText={e => setSearchText(e)}
          />
        </ViewInput>
        <ButtonOrder onPress={HandleOrder}>
          {invert ? (
            <Icon name="sort-alpha-up-alt" />
          ) : (
            <Icon name="sort-alpha-down" />
          )}
        </ButtonOrder>
      </ViewTop>
      <FlatList
        data={list}
        keyExtractor={item => String(item.key)}
        renderItem={({item}) => <List data={item} />}
      />
    </Container>
    </>
  );
}