import { PrismaClient } from '@prisma/client';
import axios from 'axios';
const cheerio = require('cheerio');
import db from './../../src/config/database';
import { data } from 'cheerio/lib/api/attributes';
import moment from 'moment';

// SEED VALUE
const prisma = new PrismaClient();

const url = 'https://formula1.com/en/results.html';

async function main() {
  try {
    await db.race_results.deleteMany({
      where: {},
    });
    // Send a GET request to the site
    const response = await axios.get(`${url}/1950/races.html`);

    // Using cheerio to parse HTML
    const $ = cheerio.load(response.data);

    // Get the list of years from the dropdown menu
    const years = [] as Array<string>;

    $('.resultsarchive-filter')
      .find('.resultsarchive-filter-item-link')
      .each((index: number, element: any) => {
        if ($(element).attr('data-name') === 'year') {
          const year = $(element).text().trim();
          years.push(year);
        }
      });
    // Loop through each year and get the racing results
    const results = [] as Array<{
      grandPrix: string;
      date: Date;
      driver: string;
      team: string;
      laps: string;
      time: string;
    }>;
    for (const year of years) {
      const yearUrl = `${url}/${year}/races.html`;
      const yearResponse = await axios.get(yearUrl);
      const year$ = cheerio.load(yearResponse.data);

      // Parsing HTML to get racing result information
      year$('.resultsarchive-table')
        .find('tr')
        .each((index: number, element: any) => {
          // Get the required information from the columns
          const columns = year$(element).find('td');
          const grandPrix = year$(columns[1]).text().trim();
          const date = year$(columns[2]).text().trim();
          const driver = year$(columns[3]).text().trim();
          const team = year$(columns[4]).text().trim();
          const laps = year$(columns[5]).text().trim();
          const time = year$(columns[6]).text().trim();
          //Store information into input array and check date
          if (date) {
            console.log('ITEM DATA', {
              grandPrix,
              date,
              driver,
              team,
              laps,
              time,
            });
            console.log('PUSH DONE YEAR', year);
            results.push({
              grandPrix,
              date: new Date(date),
              driver,
              team,
              laps,
              time,
            });
          }
        });
    }
    await db.race_results.createMany({
      data: results,
    });
    console.log('Crawling success');
  } catch (error) {
    console.error('Error Crawling: ' + error.stack);
  }
}
main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
