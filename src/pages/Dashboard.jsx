import { useAuth } from "../auth/useAuth";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome {user?.name}</p>
      <p>Role: {user?.role}</p>

       <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora et corrupti laudantium exercitationem eius blanditiis facere voluptatum, nemo earum, velit sint alias. Error modi numquam, earum minima cum at recusandae.
       Tempore quisquam minus recusandae aut reprehenderit, repudiandae architecto quia aspernatur optio nam quas quidem error animi. Eos autem delectus cum praesentium aliquid voluptas, ullam excepturi pariatur deserunt in dolorum quia.
       Quia quas vel magnam voluptates ipsam, in ad illo eaque nisi placeat dignissimos totam impedit ipsa quisquam dicta. Illo suscipit voluptas accusamus eum in sit nemo nesciunt sapiente nostrum et?
       Veritatis natus, eos at deleniti placeat soluta, eius nulla asperiores nemo, culpa pariatur dignissimos temporibus distinctio ullam quidem architecto dolores? Repudiandae voluptas suscipit, rerum quos aliquam magnam itaque laboriosam sed.
       Hic voluptatibus porro quis natus officia commodi doloribus perspiciatis eaque accusamus molestiae qui atque, sint saepe? Fuga eos quaerat laboriosam, numquam, beatae, nihil odit veritatis magnam optio delectus voluptates recusandae.
       Amet praesentium non dolorum fugit expedita earum repellendus ut soluta labore, voluptates et. Nam enim similique, minima laborum eligendi expedita exercitationem ipsum ducimus dolorem. Nesciunt similique earum sapiente! Tenetur, nemo!
       Dolorem recusandae quos facilis repellat, omnis non ad mollitia ratione. Est fugit laudantium a doloremque, nesciunt sapiente ab numquam soluta aspernatur modi vero, repellendus assumenda, expedita quae non voluptates libero?
       Veritatis, cumque illo. Ut quasi veniam officia odio delectus. Suscipit est molestias repudiandae eveniet libero quam amet illo quia quibusdam odio quidem consequuntur cupiditate, vel temporibus officia natus animi cumque?
       Perspiciatis in doloribus adipisci rem ex repellendus cumque, fugiat nisi totam facilis deleniti voluptate harum omnis. Doloremque ut a aut libero deserunt magni molestiae dolores eius saepe aliquid, nulla ipsam.
       Molestiae veritatis repudiandae est eaque nesciunt vero veniam in, obcaecati quis animi mollitia beatae, magnam rerum assumenda eius placeat. Iusto rem quidem cupiditate sint repellendus sed eius doloremque, exercitationem possimus?
       Voluptas, suscipit? Ullam eius architecto eum, recusandae iure veritatis tempore a odit consectetur temporibus quisquam optio autem tenetur quas impedit aliquam eligendi voluptates veniam necessitatibus ad ipsum neque? Fuga, quisquam?
       Facilis nulla nobis ea minus hic sequi velit a iusto ipsa consectetur! Laboriosam voluptatem, totam distinctio atque illum aliquam repellat eum sapiente error facere molestias iusto consequuntur inventore pariatur nihil!
       Accusamus ut quidem sed illum! Consectetur, aut! Ipsum debitis natus impedit, illum ad, placeat, ratione necessitatibus eligendi a nisi esse amet suscipit dignissimos aperiam dolor aliquid? Ad numquam illum facilis.
       Enim temporibus modi quae sequi itaque vitae, repudiandae culpa adipisci? Reprehenderit nostrum unde, quas harum natus id aliquid soluta dolore neque culpa qui suscipit optio expedita, laudantium, temporibus maiores enim!
       A, at. Ex a eligendi hic itaque ad consequuntur iusto, veniam nesciunt earum assumenda error placeat atque. Natus accusamus at in similique, iste odit delectus dicta fuga molestiae saepe modi.
       Perspiciatis quia nobis enim quibusdam, sequi debitis alias saepe voluptates, minima porro sed natus praesentium autem voluptate. Enim, aut illum tenetur ad, voluptatibus quod ipsa perspiciatis, unde ea nisi voluptatum!
       Harum commodi minus blanditiis. Sit odit expedita delectus sequi, in doloremque quis, explicabo impedit mollitia sunt deserunt quisquam obcaecati laudantium harum minus voluptates quam odio fugiat corporis voluptate veniam laboriosam?
       Repudiandae voluptate illo veritatis aliquam quam similique laboriosam exercitationem, nam, consectetur quidem laborum ut odit deleniti ducimus reprehenderit praesentium nihil eaque quibusdam id est rem? Iste molestias sunt deserunt fugiat.
       Ipsam eos atque deleniti vitae hic laudantium temporibus repudiandae. Impedit deleniti excepturi commodi illum officia doloribus ut, earum, quibusdam esse accusantium fugit vitae quaerat id quidem nam repudiandae? Non, amet.
       Recusandae eum, tenetur autem velit possimus neque pariatur ipsa ipsum commodi numquam amet temporibus consequuntur nemo repellat unde illum exercitationem deleniti, quas quia totam. Maxime tempore nisi sequi ipsam molestiae. </p>

      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;

