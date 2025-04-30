# Finalize Implementation of SkillTest Page Components

This step contains the implementation of all components on the `SkillTest` page with only minor styling remaining.. The components updated in this commit are `QuickStatistics`, `ComparisonGraph`, `SyllabusAnalysis`, and `QuestionAnalysis`. The `SkillOverview` component was finalized in a previous step and remains unchanged here.

## Summary of Changes
- Updated `QuickStatistics` to display rank, percentile, and correct answers.
- Implemented a real line graph in `ComparisonGraph` using `react-chartjs-2` and `chart.js`.
- Updated `SyllabusAnalysis` to show syllabus-wise progress bars.
- Updated `QuestionAnalysis` to display a circular progress indicator for correct answers.
- The `SkillTest` page is now 90% complete, with only minor styling adjustments remaining.

## Component Details

### 1. QuickStatistics
**File**: `src/components/QuickStatistics.js`

**Purpose**: Displays the user's rank, percentile, and number of correct answers in a simple format.

**Logic Explained**:
- The component receives a `skill` prop containing the user's performance data (`rank`, `percentile`, `correctAnswers`, `totalQuestions`).
- It renders a card with a heading ("Quick Statistics") and three paragraphs showing the rank, percentile, and correct answers out of total questions.
- The layout uses Tailwind CSS for styling, with padding, borders, and shadows to match the design of other components.

**Libraries Used**:
- None (uses only React and Tailwind CSS).

**How It Works**:
- The component is a stateless functional component that directly renders the `skill` data.
- It uses Tailwind CSS classes (`p-4`, `border`, `rounded-lg`, `shadow-sm`, `bg-white`) to style the card.
- The data is displayed using simple string interpolation (e.g., `{skill.rank}`).

### 2. ComparisonGraph
**File**: `src/components/ComparisonGraph.js`

**Purpose**: Visualizes the user's percentile compared to other students, with a line graph showing the distribution of students across percentiles.

**Logic Explained**:
- The component receives a `skill` prop with the user's `percentile`.
- It defines mock data (`graphData`) representing the number of students at different percentiles (e.g., 10%, 20%, ..., 90%).
- A line graph is rendered using `react-chartjs-2`, with percentiles on the x-axis and the number of students on the y-axis.
- Two vertical lines are added using the `chartjs-plugin-annotation` plugin:
  - A blue line for the user's percentile (`skill.percentile`).
  - A red line for the average percentile (`averagePercentile = 72`).
- The graph includes a legend, tooltips, and axis titles for better readability.
- The component also displays a message comparing the user's percentile to the average.

**Libraries Used**:
- **`react-chartjs-2`**: A React wrapper for Chart.js, used to render the line graph.
- **`chart.js`**: The core charting library that provides the functionality to create the line graph.
- **`chartjs-plugin-annotation`**: Adds support for annotations (e.g., vertical lines) on the chart.

**How It Works**:
- The `ChartJS.register` function registers necessary Chart.js components (`LineElement`, `PointElement`, etc.) and the annotation plugin.
- The `chartData` object defines the graph data:
  - `labels`: Percentiles extracted from `graphData`.
  - `datasets`: Number of students, styled with a teal color.
- The `options` object configures the chart:
  - `responsive: true` and `maintainAspectRatio: false` ensure the chart is responsive.
  - Annotations are used to draw vertical lines at the user's percentile and the average percentile.
  - Scales are configured to label the x-axis ("Percentile") and y-axis ("Number of Students").
- The `Line` component from `react-chartjs-2` renders the graph inside a `div` with a fixed height (`h-64`).

### 3. SyllabusAnalysis
**File**: `src/components/SyllabusAnalysis.js`

**Purpose**: Displays a syllabus-wise analysis with progress bars showing the user's performance in each topic.

**Logic Explained**:
- The component receives a `skill` prop with a `syllabus` array, where each item has a `topic` and `percentage`.
- It renders a card with a heading ("Syllabus Wise Analysis (HTML)") and a list of topics.
- For each topic, it displays:
  - The topic name and percentage (e.g., "HTML Basics: 80%").
  - A progress bar using a `div` with a dynamic width based on the percentage (`style={{ width: \`${item.percentage}%\` }}`).
- The progress bar has a gray background (`bg-gray-200`) and a blue fill (`bg-blue-500`), styled with Tailwind CSS.

**Libraries Used**:
- None (uses only React and Tailwind CSS).

**How It Works**:
- The component maps over the `skill.syllabus` array to render each topic.
- Each topic is displayed in a `div` with a text label and a progress bar.
- The progress bar is created using two nested `div` elements:
  - The outer `div` is a gray background with a fixed height (`h-2.5`) and rounded corners.
  - The inner `div` is a blue fill with a width proportional to the percentage.
- Tailwind CSS classes (`space-y-2`, `rounded-full`) ensure consistent spacing and styling.

### 4. QuestionAnalysis
**File**: `src/components/QuestionAnalysis.js`

**Purpose**: Shows the number of correct answers as a circular progress indicator.

**Logic Explained**:
- The component receives a `skill` prop with `correctAnswers` and `totalQuestions`.
- It calculates the percentage of correct answers: `percentage = (skill.correctAnswers / skill.totalQuestions) * 100`.
- It renders a card with a heading ("Question Analysis (HTML)") and a circular progress indicator:
  - The circle is created using an SVG with two `circle` elements:
    - The first `circle` is a gray background (`text-gray-200`).
    - The second `circle` is a blue progress arc (`text-blue-500`), with its length determined by `strokeDasharray`.
  - The `strokeDasharray` is calculated as `${percentage * 2.51} 251`, where 251 is the circumference of the circle (2 * π * 40, since the radius is 40).
  - The circle is rotated (`transform="rotate(-90 50 50)"`) to start the progress from the top.
- The number of correct answers (`{skill.correctAnswers}/{skill.totalQuestions}`) is displayed in the center of the circle.

**Libraries Used**:
- None (uses only React, SVG, and Tailwind CSS).

**How It Works**:
- The SVG `circle` elements are used to create a circular progress bar:
  - The background circle has a fixed stroke width and color.
  - The progress circle uses `strokeDasharray` to draw an arc proportional to the percentage.
  - The `strokeLinecap="round"` ensures the ends of the arc are rounded.
- The text in the center is positioned using `absolute` positioning and `flex` to align it perfectly in the middle of the SVG.
- Tailwind CSS classes (`w-32 h-32`, `text-blue-500`) style the circle and text.

## Related Files
- `src/components/QuickStatistics.js`
- `src/components/ComparisonGraph.js`
- `src/components/SyllabusAnalysis.js`
- `src/components/QuestionAnalysis.js`

### SkillTest Page Overview: 
![SkillTest Page Overview](../assets/image-6.png)

## How to Test
1. Run the app:
   ```bash
   npm run dev