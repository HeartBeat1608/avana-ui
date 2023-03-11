type TaskType = {
  id: string;
  title: string;
  done: boolean;
}

export const userTasks: TaskType[] = [
  {
    id: '1',
    title: 'Sign Into the Dashboard',
    done: true
  },
  {
    id: '2',
    title: 'Explore the Sidebar',
    done: false
  },
  {
    id: '3',
    title: 'Explore the Tables and Tasks',
    done: false
  },
  {
    id: '4',
    title: 'Get Familiar with the Actions',
    done: false
  },
]
