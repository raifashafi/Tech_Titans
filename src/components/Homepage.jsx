import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="home-page">
      <div className="background-image">
        <div className="content">
          <h1>REDUCE PAPER CUPS USAGE</h1>
          <p>Here's Why...</p>
          <Link to="/awareness" className="btn-link">Learn More</Link>
        </div>
      </div>
      <style jsx>{`
        .home-page {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhAQEBMVDxUPEBAPDxAVEhAQDw8PFRUWFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0dHR0tKy8tLS0tKy0tLS0rLS0rLS0rLS0rKystLS0tKystLS0tKy0tLSstLS0tKy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABDEAABAwICBQYKCAYCAwAAAAABAAIDBBEFIRIxQVFhBhNxgZGhFBUiMlKSscHR8AdCU2JygqKyM0NjwuHxI3MWJGT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQACAgEEAgEFAQEAAAAAAAAAAQIRAxIhMVETYUEEFDJxgSLR/9oADAMBAAIRAxEAPwDCGpTTKhSCnNXDR2kwciad6FjCs6WAFJlIc2VTskTzTBK2BSAgKbIFOyJSiEICymlZZJGrGopwgXssgY+67nUM+RR6RRQBnPqVlQqzSKnjkTAsudyULHi6hc7JQw3F0goImehXypJXFDm6dAc+VIJFHI0qMAp0FhBek01DmpaSndK9kbBdz3BrekpqNicqO00mkvTsI+ilpAdUzG5Fy1gAA4XKvI/o4oGDzHP/ABPcVusDOd/UxPFdJNMi9jquR9E0HRhHeVmcUwOBt7RgKvtn2T90ujAGVcJFY4pTMbfRaAqGSp0diylhaNY5oyDHuUeklY4EXTSVgai6a7TTXJoQA4yJoelITA1MCSy5JorkAWjrKB8e5SSvvqUbWOKtEsVrSM1PDWEZJrYCVIyIBDoFZaU8pOtGNCrIZEWJlmXQQZAFE+qCGeSonIFQ6SoJTCbpqe1qCqInRJWQXTnAqaKIosKBHUymhhCM5jeU3mxvTAifDZA1DralYyuG9VtU5qSABlnKiFQUpCHcwrRIlhD5kznkNJG5NETk6JsJE60HIhulW0w/qX7AVmA1y2H0YQl1fDf6rXu7ltjjujLLL/LPfmDJMlClCilXScTKevGtY7G261sq8a1kcZGtaIzPPsZbrWRrNZWzxputY6tGZWUjoxhVKbtb0KdjQq+ld5KIY9efNbs74vZBegEjowoBKkMqmhhNgkDAhucS86lQgjQCVBGdcnpAuA1StIUlMxpT3MF9aoAcuO5SRjepubCfGxqBkkDQjQwIZoAREcgUjI5RZCSE7lYuIKjc0IAq3tclY1yOLQmPkAQAI7STmuenGRSxPQMgcXpnNvK9PwPkZTvjY+Z7pC5ocWsyaL7Ms1fRclKNuqmDvxFzvaVvHDI5n9RFcHiJpHbSozRbyveDg8A82miH5GlQS0LRqhjH5GfBX4PZP3K6PDfAUhoOK9knp/6YHQ1qAngbtZ+kI8PsPufR5T4CF3gYXpDqJjjYMcTuDNI9gCU8kpH5thePxNDP3WS8L7D7hdHm4oVsvoso7VZd6MZ7yFbM5CS/WawDbd7Qe66t+SvJ/wACmlke9ha5oDAH3cNd75WVwxyTJyZYyi0bYKKVBy43C3W4doVdVcqqdusrc5iauWTxnaiq7ljT5+cegErNYjyogdfz/UJVal2Tpl0Z7GRrWNrhmVq8RxKF97OcOmM/FZqtYCcntPVIP7Vm5I3hFr4IcObcHgUWYVBhLbOcD7irNwXFl/JnZD8QExFN5oo0ngmkrOywIsKjkJRM0nBBzO3qo7gQlxXKMzBcttLJtGyjLRqXaW0myEhup5YdLNZNAmK6UnIJz5wzWpaV4Asoa2m09SSH7JocSYVKcSYNqoxhrwck7xY9VpQrYe/FrnyUgriczdRwUJbrCKMPBS6KSBvGgGtPbiLDrsmS0Y2hCzQAbE1TDcsRPGdymjlacgq2mjaUhZom4TSQmz3vkYY/B4xADbRGkXXuXbdav3B28DqVDyOmkfSxOlaIPIbotBGbbZE7uhXbiza7vXauDznyRyMd6SCnjPphEySRZDSzOobSgJaqG5bc3Bsd19yBAk8f3h3oQCzmlwDgCC4Z5i+YRkzmcVAJmgg2JsQbEXBskBo6Uuc0GO0bdg0SMuhPdSk63u7ggKLnJ26ZkLBcgNaGi1uJup3YUw+c6R3TI/3FMDpaOPa8+sgKmmgGt4H5ip5MFh2tv0lx9pQNVgMBHmDsQBX1fgY1yj1r+9UVbPRfak9H+1Y1eAQ52YOwLPV+DsF7ABJp9DVdsDrJ6TY+Q9ACpqmri+qZD0tHxUldRBqppxZZSvo3jFdksmJAamuPYoxjMX8yIuG3yY3ZdaEc8qJ71m0ujTSjqedj57tYIgRawvnxts6ArGdttViqCmm/5W3yANshZXD3561OSNUXBk0RB1iyfoNUTpG21qNrwNqyLoCr5w3YqiWoLirWvi0kC2lstsbil7FJN8EAYEqKuNy5XrYaTVaCcGlILrg8rEBW06IjgO9Qc6U4TFAw1kSmiiVeJ3KeF5KKGEzWUTSNy6YFGYdyfqprc3C4j0iNBva6yFFvgHJJbgb9E7FC+FpW6w/6PJDYzyNZvawF7u02A71pMP5F0cdiY+dO+Q6f6dXctY4ZGUvqIr2eUYRgbqiQMjyGZfIQdCNg1k+4bTZbSLkLTaN3F7iCBm4DSOuxsMhbM27Vs8UDY2NY0Bo1loAAs3O1hxshZYf4UW0hul+J5u49gstVBL2c88spcbAogEbI2M0gCBYXN9HU1ovqv7ES+MF4afKbECSDmPJ8458SB1lSA6VRwj0ndTBYd902AeRK7eY2dp0ne1XZkQiUtZNMctAWHGR2QHQAbLAOxFxeXXyv5Oyw2La4/JoYffbK8uPXcj2BedMKyyyqjTHG7N3gdeJWlrvOb3hFStssbhVWY3sduNj0LYTvvnvzVY5WiZxpltgEvkvbudftH+FcaSyuDVFnuG8ArRsetSCR5QlRqKIJQ1QmIp6ras9iI1rRVW1Z7EkAjK4ntWYq9ZWmxPasxWa1jM6MYC9RPUjlBMcisjYAj89t/SHtWhqKUawVm35G+43Wj8K8lvQjN8Dx/JXywP2FNjp3X1ol9SojUBZWzQnMWSBlYVP4RxSl6XAwAsK5GXC5VrCjU2CabI4QBabCuQcsrQ+QiEOzAI0nkdGxEYuXBMpRju2YqyfDTuedFjS8nY0Fx7AvWMP5A0rLF4dMfvGzfVC0lHh8UQ0Y2NjG5rQ32LdYH8swl9QvhHkeHciauWx5vmhvkOj+kZrV4X9HbG2M0rnna1gDG9pufYt2GpQFosUUZSzTZVUGAU8OccTQR9YjSd6xzVmGJ9kqsye/I0NSgLkoQBTY5m9jd+iPWcPglverA9Eu7mj4qPGHf88fTF7XJkMn/tnpf+0KfkZHSnyql26J/wCp5TybQE75nd2XuQ1I7Kq/6x+4+9SB96c8J3d5SX/QYDyvNqCDjo/sK88avQOUnlYfD93RHXaywLG/PSLjuWGblG+LhkkZWmoqvSibvGRWZa0fNt1+vJG0E1g5vzuU43THNWXlDVWkHG4WwppbgfO74rzeOos4HiOruW1wypu0dXH2rpizCSLsPUMxSB6ZI5aEFfVrPYjt61oKorP4ltQCMpiW1Zas1rT4mdazFZrWGQ6cYA9QOFyBvIHaVO9CTlQjZi1dFbU4HrTWy5AXzCClciKWIkXtbjvVZN0TDk58pTDInujTTEs1RoMbIpRKonRrmhU0gVkvOLkoC5RsUewcg8NE9SC4XZC3nXDYXXs0Hrz6l6yGrCfRRDaOpk2mRkfU1t/7lu7rpxRqJw5pXIdZcm6STSWhkSLrqIvSaaAJbrtJQl6aZEAT6STSUBkSCRAFRyhfaVh3c07scfimOfo1jRvkcO1oUfKt2bDvjdbpa5pQeK1OjPFLv5iTqOv3LJum/wCFpcE9A7/kqW74Je1shPvXUkt4KgehIx/GxAKhjOjWubse6ZnU5lx3qDCJPKniP8yA+sy4PsQnv/RtC4k7Sw6QfZSgdjrjuWG0xn1W7CPetnTO04K2La6HnWj71s+9YZpvnvzWWThGuP5JxIMteog9bQPcniYC5GRN/b09CHSPOR6Fki2OFTbtHFbXAau4HUvOHSrWcnqnUOhbQe5nJbHoMLvYueENRyXCJeV0GBX1Kz2JbVoqlZ7EtqBIymKbVl6vWtPih1rL1ZWGQ6cYC9B1CMkQU542UI2YFIrHDneTm6/Dcq154ozD9WQ61WT8SYchhATHjoTXOKjLisDY5wCicFzikKtIB4IXKNcnQj6D+i+S1NMP/oJ/Qz4LY88vN/o4q7Coj4xyD9TT/atp4SurFvBHBm2myzMqaZlWmpTfCVpRlZZGZJzyqzVJDVJDLIzJDMqw1SaapICz55Jzyq3VSTwpA6JOUmcUbvReWnocLDvVBXzaUFO7aGSRE8WEEfpCua13OQSsGvR02/ibn8Vlo6m8Mzfs3sqG/gdZr+4tWGT8v2jaC2/RZ1dXaWnn2OZBKelp0ZFHLPzVZc6mzFrvwPAPvcqyWTSgZn/BlfEfwSDSb+oFJi02mIpvtYgHf9sWTu65Uavn9M0UPj+FrQS6FU5h1F8tOfzZt7yFkpI9Fz2fZyPZ2E27rK2xGpOmyUH+LFHMD/VZ5L+8XQuOkeEOeNVQxlQ3pIAcOohKTtMEqAk12o9BSlNecj0FZoopjItBgk9tA8AsqXq5wiXyGncSO9VxQNHqWGzXAVpfJZrBZrtC0DDkutHI+QeqKz2JbVoKlZ/EtqYIyeK7Vl6vWtNiu1ZirOawyHTjApFX1ThtzR8hVfPfO3Wojyay4BHngrHCwbHPL0VWPVlgrQSRb8yvJ+JEH/oIkYFE6yKqIQEIYrrnR0EbgmkqbmE5sCrUhEAHzZciObSo1AbnkzX81UNzykBjPXbR7wFuBiPFeXhhGdlesxIloJyOp34v8roxy0qjlyw1OzZ+MuKjdiPFZDxjxTTiPFa6jHxmvGIjemnEVkRiPFccQ4pahrGaw4imeMOKy3jHimmv4payljNX4fxSeHrLCv4pRX8VLmUsZsqLErOHeN42hUchENQ5jvMJdGdxgk1HqvfqVdHiA3qeunEzA4ZujGi4elHsPUVjklavo1hCnvwx9NcPlpnZGQGMH+qw3Yeu1vzKOnn0o5I9sZ8IjHRlI3s/aUFUTl4bIDZ8ei1++7fMf2C3SEyet8ptRHtN3t2Nk+uw8Dr6CstaNtAUajSgI1mmk0xvMMlmu7Don8yZLPpwsO2leb8YJPg72hV81WI3c5H5Ub2kFvpRnzozxHuuoBWCNwc06bHAj8cZ1t6R7QlqBxLYqGqdZjzuaVDQVLT5F72zjd6TNnWoMfqg1mhcXf7Nqswreik01a4LL5LhudftCojMN4RuDVALnAG+QPtVNbFM9P5PS5BayE5LE8mHXAWzhOS6YcI458kdSVnsS2q/qVnsTOtWSjJ4sdazFUVpcVOtZarfmufIjqxgspVZUEZ3NjuRsz1XSTDMaIJvr2pQRc3SIXEIuhrCzoQZKRatWqMlKnZayYiCoTWhALlHjiV5WGmuKTw0oNcn44i8sgrwwrkKuT0RDySPTmuphre7rLQnPqae2T+1wKDMo1WZq2Rtuk5snhusGhc502A4nWAfwjp91utU7sRn9A960wozvdr4KQUR1kkcTZWpUZuNmTNfP6B7CmHEKj0D2FbAUzPtNWxMLGja49Yt23R5A8ZkfGNR6J9VyTxlUeifVctTzTt5+etdzR2uKPIug8fsypxKo3H1XJPGVRuPqla5sf3ifV+CkaDs/aw+5LyLoaxvsx4xKo3HsKlhxapaQWh1x90lbAA5X/az4Ihr7ayR+UD3KXk9FrH7Mq/GJMniNzHWs5tiWOG0dHsQb8YeHFzWObpZPYblrh8RsK24nHSN9m3TZpm7Bb8g9qhSXRbi+zBeNZAXWadF2bmm9r7xuPFQeHSZgXAJvbZff0rayvvq6vJBQT6Zx2kflHuVqa6IcX2ZZlZINRO9K4yPN3XceN1oTSnae53xTRSn5uq1r4QlFlGGEfV7kXhU4ZIC7yQcibE2z4KzbSH5ul8DI39yWobVnoHJmvp7ANmjJ3abQ7sJutrC8EZEHoIK8OFO7eUvgp+StVm9HM/p/Z7VVHJZ7ETrXm3gz9hPz1pj6Rx2k9afmXRK+nfZe4w7WsnVvzP+0YKB2y4XeL3Df6yzlkTN4Ymigmc4+a1x/K5DiilP8t/quWmNC7bn1qN1G7YO/wDykslcDeO+SgGGTfZu7LJwwqX0bdYV06lf8kJOYPDuR5WLxRKgYTJtsOtO8Tv2kK25ocOpJogJeSQ/FErG4Q7eneKPvexHuLdwUZ0crBGuXYaI9Anijj3tXIwaO5cjXIelGmMBH1uwlJ5Xpd5UPMHcVIylPFSMcGHa72p3NX1uGSXwdyXmDtRYDmQcQOhSc3xCjEfSuMR4pFDzGd47kop+juUQhO4p1nbkhkxgaN3cozbfZMcx52KB0TtqAsKNtpXNIG3vQJy2pAL5C56kUFhZkbfWFzpW8EL4A452Kiki0dYPeikFsKMjeHYmuc3YgTINgPekDzsanpFqDQ8JDINdkJ5ewWT2Mk1lFBYSJBuTufG5C+UmyzEZIoLCjP0dgTDN0diijcSpWMO5OqFY3wi3+gmGpPDsCnMKaadLYNyAznf3BRmQ7+4Ik0p+bpwpuHtRsPcAcTs9gTdFysxTjcu5gJWBVEO+bJpicrQwpjoQnYqK0xlIWlHuiCZzAQBXlpSaJKsOYCZzITEV9uK5GmAblyBGoFWNycKrguXKaLFNbbYojXcFy5FDEGIAbEhxLcFy5OkKxhxI7knjTguXIpBbGOxXgh5K+65cnSFqYPz4R1LijWfVSLk6FYZ/5A0/V7kJNijXax3LlynSirYHNVA6ghDI665cqRLJW1ZCf4eUq5FBZG+pKj07rlyKAIhRsYK5coZaH6JT2xn5suXKRkrWfOSfza5ckAvNhMdEEq5MRBJChpIUq5AELo1E9q5cmIhN0265cmITSSrlydCP/9k=');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .content {
          background: rgba(255, 255, 255, 0.8);
          padding: 20px 40px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .content h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 10px;
        }

        .content p {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 20px;
        }

        .btn-link {
          display: inline-block;
          padding: 10px 20px;
          font-size: 1rem;
          color: white;
          background-color: #007bff;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .btn-link:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
