import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import mockCv from '../mocks/mock-cv'; // Імпортуємо mockCV

export const generatePdf = () => {
	const doc = new jsPDF();

	// Заголовок документа
	doc.setFontSize(20);
	doc.text(`${mockCv.personalInfo.firstName} ${mockCv.personalInfo.lastName}`, 10, 10);

	// Розділ "Position"
	doc.setFontSize(14);
	doc.text('Position:', 10, 20);
	doc.text(mockCv.personalInfo.position, 40, 20);

	doc.setFontSize(16);
	doc.text('Skills:', 10, 30);
	doc.autoTable({
		startY: 35,
		head: [['Category', 'Details']],
		body: [
			['Languages and Technologies', mockCv.skills.languagesAndTechnologies.join(', ')],
			['Tools', mockCv.skills.tools.join(', ')],
		],
	});

	// Розділ "Work Experience"
	let y = doc.lastAutoTable.finalY + 10;
	doc.setFontSize(16);
	doc.text('Work Experience:', 10, y);

	mockCv.workExperience.forEach(experience => {
		y += 10;
		doc.setFontSize(14);
    doc.text(`Project name: ${experience.project}`, 10, y);
		y += 5;

		doc.autoTable({
			startY: y,
			head: [['Position', 'Duration', 'Technologies', 'Tasks']],
			body: [[experience.position, experience.duration, experience.technologies.join(', '), experience.tasks]],
		});

		y = doc.lastAutoTable.finalY + 10; // Оновлюємо позицію
	});

	// Розділ "Education and Certifications"
	doc.setFontSize(16);
	doc.text('Education and Certifications:', 10, y);
	doc.autoTable({
		startY: y + 5,
		head: [['Institution', 'Degree', 'Date']],
		body: mockCv.educationAndCertifications.map(edu => [
			edu.institution,
			edu.degree || 'Completed with certification',
			edu.date,
		]),
	});

	// Розділ "Languages"
	y = doc.lastAutoTable.finalY + 10;
	doc.setFontSize(16);
	doc.text('Languages:', 10, y);
	doc.autoTable({
		startY: y + 5,
		head: [['Language', 'Level']],
		body: mockCv.languages.map(lang => [lang.language, lang.level]),
	});

	// Розділ "Personal Qualities"
	y = doc.lastAutoTable.finalY + 10;
	doc.setFontSize(16);
	doc.text('Personal Qualities:', 10, y);
	doc.setFontSize(12);
	doc.text(mockCv.personalQualities.qualities.join(', '), 10, y + 10);

	// Розділ "Hobbies"
	y += 20;
	doc.setFontSize(16);
	doc.text('Hobbies:', 10, y);
	doc.setFontSize(12);
	doc.text(mockCv.hobbies.hobbies.join(', '), 10, y + 10);

	// Завантажуємо PDF
	doc.save('CV.pdf');
};
