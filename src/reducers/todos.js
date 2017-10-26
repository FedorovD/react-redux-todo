const db = [
    {
        _id: "13f2b8677429a",
        name: 'Купить молоко',
        type: 'task',
        status: 'todo',
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere eu elit vitae bibendum. Sed feugiat faucibus sapien, eu suscipit tellus faucibus eu. Sed dictum sem leo, in ullamcorper tellus interdum et. Curabitur viverra lacus elit, ac tempus nisl viverra eu. Nulla facilisi. Morbi volutpat id libero et egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris facilisis facilisis imperdiet. Nunc faucibus blandit lorem eu convallis. Vestibulum ac dolor aliquam, lobortis lectus nec, maximus est. Nunc pulvinar orci eu dapibus accumsan.`
    },
    {
        _id: "6d2cd6bbe2348",
        name: 'Подобрать чек',
        type: 'task',
        status: 'todo',
        details: `Nullam in velit non nisi viverra laoreet. Pellentesque ac augue quis nibh vulputate vehicula. Fusce vitae tempus libero, at egestas mauris. In pretium finibus ipsum, nec pharetra orci tincidunt quis. Mauris metus est, consequat eu nisi vel, pretium pharetra nisi. Praesent egestas at enim nec pulvinar. Cras eget mollis diam, nec egestas ante. Donec dignissim elit nulla, at hendrerit nibh tincidunt non. Donec eu faucibus urna, ut sagittis nisi. In facilisis hendrerit enim quis rutrum. Donec elementum id metus vel feugiat. Aliquam placerat dignissim elementum. Quisque congue risus et elit convallis ultricies. In egestas condimentum eros vitae facilisis.`

    },
    {
        _id: "e34e40298276f",
        name: 'Обналичить чек',
        type: 'bug',
        status: 'todo',
        details: `Donec eu vehicula felis. Ut ut velit a orci condimentum interdum vel ut sem. Vestibulum quis bibendum turpis. Vivamus efficitur interdum mauris, id faucibus ante auctor at. Etiam dignissim rutrum lorem eget molestie. Nulla convallis egestas mauris, at porttitor eros tincidunt vitae. Sed lectus urna, tempor nec scelerisque et, mattis non sem.
        Nam ac euismod eros, nec tincidunt sapien. Quisque nulla augue, venenatis id blandit id, bibendum quis sapien. Vivamus non risus et libero tincidunt pellentesque. Curabitur eu enim convallis, sodales turpis eu, condimentum sapien. Nunc gravida mattis ultricies. Sed lacus urna, congue at dignissim ac, elementum eget ante. Etiam ac blandit tellus. Nulla eu elementum neque. Donec in ante et enim vehicula eleifend.`
    },
    {
        _id: "1e409fffba412",
        name: 'Собрать подписи',
        type: 'bug',
        status: 'inProgress',
        details: `Nullam rutrum tellus in posuere ullamcorper. Ut at nulla sit amet diam ultrices vehicula non eget tortor. In hac habitasse platea dictumst. Mauris ullamcorper magna sed eleifend sodales. Donec sollicitudin maximus ante, eget convallis nisi maximus sed. Donec felis tortor, varius vel felis quis, consequat egestas justo. Aenean dignissim est eu euismod malesuada. Curabitur id mattis est, id vehicula leo. Vivamus facilisis eget ex efficitur rutrum. Phasellus in rutrum metus. Suspendisse vel malesuada nibh. Suspendisse sed congue leo. Vivamus cursus suscipit justo a sagittis. Etiam sit amet sollicitudin nisi. Donec sed viverra ante, vitae pretium est. Cras id luctus nulla.`
    },
    {
        _id: "a0b2892f70073",
        name: 'Возвратить книгу',
        type: 'task',
        status: 'completed',
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere eu elit vitae bibendum. Sed feugiat faucibus sapien, eu suscipit tellus faucibus eu. Sed dictum sem leo, in ullamcorper tellus interdum et. Curabitur viverra lacus elit, ac tempus nisl viverra eu. Nulla facilisi. Morbi volutpat id libero et egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris facilisis facilisis imperdiet. Nunc faucibus blandit lorem eu convallis. Vestibulum ac dolor aliquam, lobortis lectus nec, maximus est. Nunc pulvinar orci eu dapibus accumsan.`
        
    },
    {
        _id: "092f4bd2dcd1c",
        name: 'Получить автограф Гэри',
        type: 'bug',
        status: 'inProgress',
        details: `Nullam in velit non nisi viverra laoreet. Pellentesque ac augue quis nibh vulputate vehicula. Fusce vitae tempus libero, at egestas mauris. In pretium finibus ipsum, nec pharetra orci tincidunt quis. Mauris metus est, consequat eu nisi vel, pretium pharetra nisi. Praesent egestas at enim nec pulvinar. Cras eget mollis diam, nec egestas ante. Donec dignissim elit nulla, at hendrerit nibh tincidunt non. Donec eu faucibus urna, ut sagittis nisi. In facilisis hendrerit enim quis rutrum. Donec elementum id metus vel feugiat. Aliquam placerat dignissim elementum. Quisque congue risus et elit convallis ultricies. In egestas condimentum eros vitae facilisis.`
        
    },
    {
        _id: "bf50ba0741e2",
        name: 'Исповедоваться в грехах',
        type: 'task',
        status: 'inProgress',
        details: `Donec eu vehicula felis. Ut ut velit a orci condimentum interdum vel ut sem. Vestibulum quis bibendum turpis. Vivamus efficitur interdum mauris, id faucibus ante auctor at. Etiam dignissim rutrum lorem eget molestie. Nulla convallis egestas mauris, at porttitor eros tincidunt vitae. Sed lectus urna, tempor nec scelerisque et, mattis non sem.`        
    },
    {
        _id: "98884212f849d",
        name: 'Проголосовать',
        type: 'task',
        status: 'completed',
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere eu elit vitae bibendum. Sed feugiat faucibus sapien, eu suscipit tellus faucibus eu. Sed dictum sem leo, in ullamcorper tellus interdum et. Curabitur viverra lacus elit, ac tempus nisl viverra eu. Nulla facilisi. Morbi volutpat id libero et egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris facilisis facilisis imperdiet. Nunc faucibus blandit lorem eu convallis. Vestibulum ac dolor aliquam, lobortis lectus nec, maximus est. Nunc pulvinar orci eu dapibus accumsan.`        
    },
    {
        _id: "614d241c719fe",
        name: 'Найти рождественскую ёлку',
        type: 'task',
        status: 'completed',
        details: `Donec eu vehicula felis. Ut ut velit a orci condimentum interdum vel ut sem. Vestibulum quis bibendum turpis. Vivamus efficitur interdum mauris, id faucibus ante auctor at. Etiam dignissim rutrum lorem eget molestie. Nulla convallis egestas mauris, at porttitor eros tincidunt vitae. Sed lectus urna, tempor nec scelerisque et, mattis non sem.
        Nam ac euismod eros, nec tincidunt sapien. Quisque nulla augue, venenatis id blandit id, bibendum quis sapien. Vivamus non risus et libero tincidunt pellentesque. Curabitur eu enim convallis, sodales turpis eu, condimentum sapien. Nunc gravida mattis ultricies. Sed lacus urna, congue at dignissim ac, elementum eget ante. Etiam ac blandit tellus. Nulla eu elementum neque. Donec in ante et enim vehicula eleifend.`
    }
]

const todos = (state = db, action) => {
    console.log(action);
    if (action.type === 'ADD_TODO') {
        return [
            ...state,
            {
                _id: action._id,
                name: action.name,
                status: action.status || 'todo'
            }
        ]
    }
    return state
}

export default todos