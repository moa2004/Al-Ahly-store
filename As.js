document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".year-button");
    const trophyContainer = document.querySelector(".trophy-container");
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const year = button.dataset.year;
        let champions = "";
          switch (year) {
          case "2000":
            champions = "Al-Ahly won the Egyptian Premier League and the CAF Champions League.";
            break;
          case "2001":
            champions = "Al-Ahly won the Egyptian Premier League and the CAF Champions League.";
            break;
          case "2002":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2003":
            champions = "Al-Ahly won the Egyptian Premier League and the CAF Champions League.";
            break;
          case "2004":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2005":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2006":
            champions = "Al-Ahly won the Egyptian Premier League and the FIFA Club World Cup.";
            break;
          case "2007":
            champions = "Al-Ahly won the Egyptian Premier League and the CAF Champions League.";
            break;
          case "2008":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2009":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2010":
            champions = "Al-Ahly won the Egyptian Premier League and the CAF Champions League.";
            break;
          case "2011":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2012":
            champions = "Al-Ahly won the Egyptian Premier League and the CAF Champions League.";
            break;
          case "2013":
            champions = "Al-Ahly won the Egyptian Premier League and the CAF Champions League.";
            break;
          case "2014":
            champions = "Al-Ahly won the Egyptian Premier League and the CAF Confederation Cup.";
            break;
          case "2015":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2016":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2017":
            champions = "Al-Ahly won the Egyptian Premier League and the CAF Champions League.";
            break;
          case "2018":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2019":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2020":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          case "2021":
            champions = "Al-Ahly won the Egyptian Premier League and the CAF Champions League.";
            break;
          case "2022":
            champions = "Al-Ahly won the Egyptian Premier League.";
            break;
          default:
            champions = "Champions data not available for this year.";
        }
          trophyContainer.innerHTML = "<p>" + champions + "</p>";
          trophyContainer.classList.toggle("active");
      });
    });
      setTimeout(function() {
      const essay = document.querySelector(".essay");
      essay.classList.add("show");
    }, 100); 
  });
  